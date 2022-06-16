//
// Copyright 2022 Anysphere, Inc.
// SPDX-License-Identifier: GPL-3.0-only
//

#include "outbox.hpp"

#include "client_lib/client_lib.hpp"

auto MessageToSend::from_json(const asphr::json& json) -> MessageToSend {
  auto message = MessageToSend{
      .to = Friend::from_json(json.at("to")),
      .sequence_number = json.at("sequence_number").get<uint32_t>(),
      .msg = json.at("msg").get<string>(),
      .chunked = json.at("chunked").get<bool>(),
      .num_chunks = json.at("num_chunks").get<uint32_t>(),
      .chunks_start_id = json.at("chunks_start_id").get<uint32_t>(),
      .full_message_id = json.at("full_message_id").get<string>()};
  return message;
}

auto MessageToSend::to_json() -> asphr::json {
  return asphr::json{
      {"to", to.to_json()},
      {"sequence_number", sequence_number},
      {"msg", msg},
      {"chunked", chunked},
      {"num_chunks", num_chunks},
      {"chunks_start_id", chunks_start_id},
      {"full_message_id", full_message_id},
  };
}

auto read_outbox_json(const string& file_address) -> asphr::json {
  if (!std::filesystem::exists(file_address) ||
      std::filesystem::file_size(file_address) == 0) {
    auto dir_path =
        std::filesystem::path(file_address).parent_path().u8string();
    std::filesystem::create_directories(dir_path);
    cout << "creating new outbox asphr::json!" << endl;
    asphr::json j = {{"outbox", asphr::json::array()}};
    std::ofstream o(file_address);
    o << std::setw(4) << j.dump(4) << std::endl;
  }
  auto json = asphr::json::parse(std::ifstream(file_address));
  return json;
}

Outbox::Outbox(const string& file_address, shared_ptr<Msgstore> msgstore)
    : Outbox(read_outbox_json(file_address), file_address, msgstore) {}

Outbox::Outbox(const asphr::json& serialized_json, const string& file_address,
               shared_ptr<Msgstore> msgstore)
    : msgstore(msgstore), saved_file_address(file_address) {
  for (auto& messageJson : serialized_json.at("outbox")) {
    auto message = MessageToSend::from_json(messageJson);
    outbox_ids.insert(message.full_message_id);
    if (outbox.contains(message.to.name)) {
      outbox.at(message.to.name).push_back(message);
    } else {
      outbox[message.to.name] = {message};
    }
  }
  // sort the outbox list
  for (auto& [friend_name, messages] : outbox) {
    std::sort(messages.begin(), messages.end(),
              [](const MessageToSend& a, const MessageToSend& b) {
                return a.sequence_number < b.sequence_number;
              });
  }

  save();

  check_rep();
}

auto Outbox::save() noexcept(false) -> void {
  check_rep();
  asphr::json j = {{"outbox", asphr::json::array()}};
  for (auto& [friend_name, messages] : outbox) {
    for (auto& message : messages) {
      j.at("outbox").push_back(message.to_json());
    }
  }
  std::ofstream o(saved_file_address);
  o << std::setw(4) << j.dump(4) << std::endl;
  check_rep();
}

auto Outbox::add(const string& id, const string& message,
                 const Friend& friend_info) noexcept -> void {
  check_rep();

  if (outbox_ids.contains(id)) {
    // don't add the id if it already exists
    return;
  }
  outbox_ids.insert(id);

  // chunk! and add.
  vector<string> chunked_message;
  for (size_t i = 0; i < message.size(); i += GUARANTEED_SINGLE_MESSAGE_SIZE) {
    chunked_message.push_back(
        message.substr(i, GUARANTEED_SINGLE_MESSAGE_SIZE));
  }
  uint32_t last_send_id = friend_info.latest_ack_id;
  if (outbox.contains(friend_info.name)) {
    last_send_id = outbox.at(friend_info.name).back().sequence_number;
  }
  uint32_t chunks_start_id;
  for (size_t i = 0; i < chunked_message.size(); i++) {
    auto sequence_number = last_send_id + 1;
    last_send_id = sequence_number;
    if (i == 0) {
      chunks_start_id = sequence_number;
    }

    auto msgToSend = MessageToSend{friend_info,
                                   sequence_number,
                                   chunked_message.at(i),
                                   chunked_message.size() > 1,
                                   (uint32_t)chunked_message.size(),
                                   chunks_start_id,
                                   id};

    if (outbox.contains(friend_info.name)) {
      outbox[friend_info.name].push_back(msgToSend);
    } else {
      outbox[friend_info.name] = {msgToSend};
    }
  }

  save();

  check_rep();
}

auto Outbox::message_to_send(const Config& config, const Friend& dummyMe)
    -> MessageToSend {
  check_rep();
  // first remove ACKed messages
  vector<string> recently_acked_friends;
  vector<string> remove_friend_names;
  for (auto& [friend_name, messages] : outbox) {
    auto remove_num = 0;
    for (size_t i = 0; i < messages.size(); i++) {
      auto friend_info_status = config.get_friend(friend_name);
      if (!friend_info_status.ok()) {
        remove_friend_names.push_back(friend_name);
        continue;
      }
      auto friend_info = friend_info_status.value();
      cout << friend_name
           << ": friend_info.latest_ack_id=" << friend_info.latest_ack_id
           << endl;
      if (messages.at(i).sequence_number <= friend_info.latest_ack_id) {
        remove_num++;
        recently_acked_friends.push_back(friend_name);
      } else {
        break;
      }
    }
    // mark messages as delivered!
    for (size_t i = 0; i < static_cast<size_t>(remove_num); i++) {
      if (i == messages.size() - 1 || messages.at(i).full_message_id !=
                                          messages.at(i + 1).full_message_id) {
        auto status =
            msgstore->deliver_outgoing_message(messages.at(i).full_message_id);
        if (!status.ok()) {
          cout << "failed to mark message as delivered: " << status << endl;
        }
        outbox_ids.erase(messages.at(i).full_message_id);
      }
    }
    messages.erase(messages.begin(), messages.begin() + remove_num);
    if (messages.size() == 0) {
      remove_friend_names.push_back(friend_name);
    }
  }
  // remove the empty message lists in a second loop so as to not get stupid
  // use-after-free errors :')
  for (auto& friend_name : remove_friend_names) {
    outbox.erase(friend_name);
  }
  check_rep();

  if (outbox.size() == 0) {
    save();
    return MessageToSend{.to = dummyMe,
                         .sequence_number = 0,
                         .msg = "fake message",
                         .chunked = false,
                         .num_chunks = 0,
                         .chunks_start_id = 0,
                         .full_message_id = "fake:message:id"};
  }

  // now choose a message to send!!
  // first try with the recently acked friends
  for (auto& friend_name : recently_acked_friends) {
    if (outbox.contains(friend_name)) {
      auto& messages = outbox[friend_name];
      save();
      return messages.at(0);
    }
  }
  cout << "outbox size is " << outbox.size() << endl;
  // if not returned yet, choose a random friend from the outbox
  auto random_friend_number = absl::Uniform(rand_bitgen_, 0u, outbox.size());
  auto random_friend = std::next(std::begin(outbox), random_friend_number);
  auto& messages = (*random_friend).second;
  save();
  return messages.at(0);
}

auto Outbox::check_rep() const noexcept -> void {
  std::unordered_set<string> outbox_ids_set;

  assert(saved_file_address.size() > 0);
  for (auto& [friend_name, messages] : outbox) {
    for (auto& message : messages) {
      assert(message.to.name == friend_name);
      outbox_ids_set.insert(message.full_message_id);
    }
    uint32_t prevMessageId = 0;
    for (auto& message : messages) {
      assert(message.sequence_number > prevMessageId);
      prevMessageId = message.sequence_number;
      (void)prevMessageId;
    }
  }

  assert(outbox_ids.size() == outbox_ids_set.size());
  for (auto& id : outbox_ids) {
    assert(outbox_ids_set.contains(id));
    (void)id;  // silence unused variable warning
  }
}