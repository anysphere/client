//
// Copyright 2022 Anysphere, Inc.
// SPDX-License-Identifier: GPL-3.0-only
//

#include "inbox.hpp"

#include "constants.hpp"

auto read_inbox_json(const string& file_address) -> asphr::json {
  if (!std::filesystem::exists(file_address) ||
      std::filesystem::file_size(file_address) == 0) {
    auto dir_path =
        std::filesystem::path(file_address).parent_path().u8string();
    std::filesystem::create_directories(dir_path);
    cout << "creating new inbox asphr::json!" << endl;
    asphr::json j = {{"inprogress", asphr::json::array()}};
    std::ofstream o(file_address);
    o << std::setw(4) << j.dump(4) << std::endl;
  }
  auto i_json = asphr::json::parse(std::ifstream(file_address));
  return i_json;
}

Inbox::Inbox(const string& file_address)
    : Inbox(read_inbox_json(file_address), file_address) {}

Inbox::Inbox(const asphr::json& serialized_json, const string& file_address)
    : saved_file_address(file_address) {
  for (const auto& inbox_item : serialized_json.at("inprogress")) {
    auto friend_name = inbox_item.at("friend_name").get<string>();
    auto chunk_start_id = inbox_item.at("chunk_start_id").get<uint32_t>();
    auto chunks = inbox_item.at("chunks").get<vector<string>>();
    inbox[make_pair(friend_name, chunk_start_id)] = chunks;
  }

  save();
  check_rep();
}

auto Inbox::save() noexcept(false) -> void {
  check_rep();
  asphr::json j = {{"inprogress", asphr::json::array()}};
  for (const auto& inbox_item : inbox) {
    auto friend_name = inbox_item.first.first;
    auto chunk_start_id = inbox_item.first.second;
    auto chunks = inbox_item.second;
    asphr::json j_item = {
        {"friend_name", friend_name},
        {"chunk_start_id", chunk_start_id},
        {"chunks", chunks},
    };
    j.at("inprogress").push_back(j_item);
  }
  std::ofstream o(saved_file_address);
  o << std::setw(4) << j.dump(4) << std::endl;
  check_rep();
}

auto Inbox::get_encrypted_acks(const vector<Friend>& friends,
                               const Crypto& crypto, const Friend& dummyMe)
    -> asphr::StatusOr<pir_value_t> {
  assert(friends.size() <= MAX_FRIENDS);
  check_rep();

  vector<string> encrypted_acks(MAX_FRIENDS);
  for (auto& friend_info : friends) {
    if (!friend_info.enabled) {
      continue;
    }
    auto ack = crypto.encrypt_ack(friend_info.last_receive_id, friend_info);
    if (!ack.ok()) {
      cout << "encryption failed: " << ack.status() << endl;
      return absl::UnknownError("encryption failed");
    }
    encrypted_acks[friend_info.ack_index] = ack.value();
  }
  for (size_t i = 0; i < MAX_FRIENDS; i++) {
    if (encrypted_acks.at(i).empty()) {
      auto ack = crypto.encrypt_ack(0, dummyMe);
      if (!ack.ok()) {
        cout << "encryption failed: " << ack.status() << endl;
        return absl::UnknownError("encryption failed");
      }
      encrypted_acks[i] = ack.value();
    }
  }
  pir_value_t pir_acks;
  for (size_t i = 0; i < MAX_FRIENDS; i++) {
    std::copy(encrypted_acks.at(i).begin(), encrypted_acks.at(i).end(),
              pir_acks.begin() + i * ENCRYPTED_ACKING_BYTES);
  }

  check_rep();
  return pir_acks;
}

auto Inbox::update_ack_from_friend(Config& config, pir_value_t& pir_acks,
                                   const Friend& friend_info,
                                   const Crypto& crypto) -> bool {
  check_rep();
  vector<string> encrypted_acks(MAX_FRIENDS);
  for (size_t i = 0; i < MAX_FRIENDS; i++) {
    encrypted_acks.at(i).resize(ENCRYPTED_ACKING_BYTES);
    std::copy(pir_acks.begin() + i * ENCRYPTED_ACKING_BYTES,
              pir_acks.begin() + (i + 1) * ENCRYPTED_ACKING_BYTES,
              encrypted_acks.at(i).begin());
  }

  // try decrypting each!
  for (size_t i = 0; i < MAX_FRIENDS; i++) {
    auto ack = crypto.decrypt_ack(encrypted_acks.at(i), friend_info);
    if (!ack.ok()) {
      continue;
    }
    if (ack.value() >= friend_info.latest_ack_id) {
      auto new_friend_info = friend_info;
      new_friend_info.latest_ack_id = ack.value();
      config.update_friend(new_friend_info);
      cout << "updating friend " << new_friend_info.name << " with ack id "
           << new_friend_info.latest_ack_id << endl;
    } else {
      cout << "something weird is going on.... ACKing is older than latest ack "
              "id. look into this"
           << endl;
    }
    check_rep();
    return true;
  }
  check_rep();
  return false;
}

auto Inbox::receive_message(FastPIRClient& client, Config& config,
                            const asphrserver::ReceiveMessageResponse& reply,
                            const Friend& friend_info_in, const Crypto& crypto,
                            string* previous_success_receive_friend)
    -> std::optional<InboxMessage> {
  check_rep();
  Friend friend_info = friend_info_in;
  // first look at the ACKs
  auto ack_answer = reply.pir_answer_acks();
  auto ack_answer_obj = client.answer_from_string(ack_answer);
  auto decoded_acks = client.decode(ack_answer_obj, friend_info.read_index);
  // now check to see what we can do with this! update the friend ACK info
  auto success_acks =
      update_ack_from_friend(config, decoded_acks, friend_info, crypto);
  cout << "success acks: " << (success_acks ? "true" : "false") << endl;
  // friend_info may have been updated!
  auto friend_info_status = config.get_friend(friend_info.name);
  if (!friend_info_status.ok()) {
    // friend info has been deleted!
    save();
    return std::nullopt;
  }
  friend_info = friend_info_status.value();
  // we do not want to break if this wasn't successful. it is ok if it
  // isn't!!!

  auto answer = reply.pir_answer();
  auto answer_obj = client.answer_from_string(answer);
  auto decoded_value = client.decode(answer_obj, friend_info.read_index);

  auto decrypted = crypto.decrypt_receive(decoded_value, friend_info);
  if (!decrypted.ok()) {
    cout << "decryption failed, message was probably not for us: "
         << decrypted.status() << endl;
    save();
    return std::nullopt;
  }
  auto& message = decrypted.value();

  if (message.id() == 0) {
    cout << "empty message for security" << endl;
    save();
    return std::nullopt;
  }

  // if this is an old message, just return here. we've already seen it!
  if (message.id() <= friend_info.last_receive_id) {
    cout << "message is old, we've already seen it" << endl;
    save();
    return std::nullopt;
  }

  // only ACK this message if it is exactly the next ID we expect. otherwise, we
  // still need to await more messages
  if (message.id() == friend_info.last_receive_id + 1) {
    auto new_friend_info = friend_info;
    new_friend_info.last_receive_id = message.id();
    // TODO: update the last_receive_id atomically with adding the message to
    // the inbox. in particular, we need to guard this update as well as the
    // later inbox update with a lock on the config (not inbox because it is not
    // threadsafe).
    config.update_friend(new_friend_info);
    // friend_info has been updated!
    auto friend_info_status = config.get_friend(friend_info.name);
    if (!friend_info_status.ok()) {
      // friend info has been deleted!
      save();
      return std::nullopt;
    }
    friend_info = friend_info_status.value();
  } else {
    cout << "message ID is not next expected ID. we need to wait for more "
            "messages. WARNING may be worth looking into."
         << endl;
    // return early, because the sender needs to resend previous messages first
    // TODO: may be worth saving this and optimizing here, but it requires far
    // more accounting work on our end
    save();
    return std::nullopt;
  }

  // we have received a new message (chunk) that we haven't received before!
  // this is a success!
  *previous_success_receive_friend = friend_info.name;

  if (message.num_chunks() == 0) {
    save();
    return InboxMessage{message.msg(), friend_info.name, message.id()};
  }

  // now we need to check chunks...
  auto chunk_key = make_pair(friend_info.name, message.chunks_start_id());
  if (!inbox.contains(chunk_key)) {
    inbox[chunk_key] = vector<string>(message.num_chunks());
  }
  auto& chunks = inbox.at(chunk_key);

  chunks[message.id() - message.chunks_start_id()] = message.msg();

  check_rep();

  if (friend_info.last_receive_id ==
      message.chunks_start_id() + message.num_chunks() - 1) {
    // we have all the chunks!
    string msg;
    for (auto& chunk : chunks) {
      msg += chunk;
    }
    // remove the chunk
    inbox.erase(chunk_key);
    save();
    return InboxMessage{msg, friend_info.name, message.id()};
  }
  save();
  return std::nullopt;
}

auto Inbox::check_rep() const noexcept -> void {
  assert(saved_file_address.size() > 0);
  for (auto& [_, v] : inbox) {
    // must always have more than 1 chunk — otherwise wouldn't need to chunk it!
    assert(v.size() > 1);
    (void)v;  // silence unused variable warning
  }
}