//
// Copyright 2022 Anysphere, Inc.
// SPDX-License-Identifier: GPL-3.0-only
//

#include "transmitter.hpp"

#include <algorithm>

#include "schema/server.grpc.pb.h"

// TODO: check that they are moved.
auto string_to_rust_u8Vec(const std::string& str) -> rust::Vec<uint8_t> {
  auto vec = rust::Vec<uint8_t>();
  for (auto c : str) {
    vec.push_back(c);
  }
  return vec;
}

auto rust_u8Vec_to_string(const rust::Vec<uint8_t>& vec) -> std::string {
  std::string str(vec.begin(), vec.end());
  return str;
}

auto generate_dummy_address(const Global& G, const db::Registration& reg)
    -> db::Address {
  auto dummy_friend_keypair = crypto::generate_keypair();

  // convert reg.public_key, private_key to a string
  auto public_key_str = rust_u8Vec_to_string(reg.public_key);
  auto private_key_str = rust_u8Vec_to_string(reg.private_key);

  auto dummy_read_write_keys = crypto::derive_read_write_keys(
      public_key_str, private_key_str, dummy_friend_keypair.first);

  // convert dummy_read_write_keys to a rust::Vec<uint8_t>
  auto read_key_vec_rust = string_to_rust_u8Vec(dummy_read_write_keys.first);
  auto write_key_vec_rust = string_to_rust_u8Vec(dummy_read_write_keys.second);

  return (db::Address){-1, 0, 0, read_key_vec_rust, write_key_vec_rust};
}

Transmitter::Transmitter(const Global& G,
                         shared_ptr<asphrserver::Server::Stub> stub)
    : G(G), stub(stub) {
  check_rep();
}

auto Transmitter::setup_registration_caching() -> void {
  check_rep();

  // MAY throw if we are not registered.
  auto pir_secret_key_str = rust_u8Vec_to_string(G.db->get_pir_secret_key());

  if (!cached_pir_client.has_value() ||
      cached_pir_client_secret_key.value() != pir_secret_key_str) {
    auto reg = G.db->get_registration();
    cached_pir_client = std::optional(std::make_unique<FastPIRClient>(
        rust_u8Vec_to_string(reg.pir_secret_key),
        rust_u8Vec_to_string(reg.pir_galois_key)));

    cached_pir_client_secret_key = rust_u8Vec_to_string(reg.pir_secret_key);
    dummy_address = generate_dummy_address(G, reg);
  }

  check_rep();
}

auto decrypt_ack_row(pir_value_t& acks_row, const string& read_key)
    -> asphr::StatusOr<int> {
  vector<string> encrypted_acks(MAX_FRIENDS);
  for (size_t i = 0; i < MAX_FRIENDS; i++) {
    encrypted_acks.at(i).resize(ENCRYPTED_ACKING_BYTES);
    std::copy(acks_row.begin() + i * ENCRYPTED_ACKING_BYTES,
              acks_row.begin() + (i + 1) * ENCRYPTED_ACKING_BYTES,
              encrypted_acks.at(i).begin());
  }

  // try decrypting each!
  for (size_t i = 0; i < MAX_FRIENDS; i++) {
    auto ack = crypto::decrypt_ack(encrypted_acks.at(i), read_key);
    if (ack.ok()) {
      return ack.value();
    }
  }
  return absl::NotFoundError("Could not decrypt any ack.");
}

auto Transmitter::encrypt_ack_row(const vector<db::OutgoingAck>& acks,
                                  const string& write_key)
    -> asphr::StatusOr<pir_value_t> {
  assert(acks.size() <= MAX_FRIENDS);
  check_rep();

  vector<string> encrypted_acks(MAX_FRIENDS);
  for (auto& wrapped_ack : acks) {
    auto ack = crypto::encrypt_ack(wrapped_ack.ack,
                                   rust_u8Vec_to_string(wrapped_ack.write_key));
    if (!ack.ok()) {
      ASPHR_LOG_ERR("Could not encrypt ack.", error_code, ack.status().code(),
                    error_message, ack.status().message());
      return absl::UnknownError("encryption failed");
    }
    encrypted_acks.at(wrapped_ack.ack_index) = ack.value();
  }
  for (size_t i = 0; i < MAX_FRIENDS; i++) {
    if (encrypted_acks.at(i).empty()) {
      auto ack = crypto::encrypt_ack(0, write_key);
      if (!ack.ok()) {
        ASPHR_LOG_ERR("Could not encrypt dummy ack.", error_code,
                      ack.status().code(), error_message,
                      ack.status().message());
        return absl::UnknownError("encryption failed");
      }
      encrypted_acks.at(i) = ack.value();
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

auto Transmitter::retrieve() -> void {
  check_rep();

  if (!G.db->has_registered()) {
    ASPHR_LOG_INFO("Not registered, so not retrieving messages.");
    return;
  }

  setup_registration_caching();
  auto& client = **cached_pir_client;

  // -----
  // Step 1: choose RECEIVE_FRIENDS_PER_ROUND friends to receive from!!
  // -----
  //    Priority 1: the friend that we just sent a message to
  std::vector<int> priority_receive_friends;
  if (just_sent_friend.has_value()) {
    priority_receive_friends.push_back(just_sent_friend.value());
  }
  //    Priority 2: the friend that we successfully received a new message
  //    from the previous round
  if (previous_success_receive_friend.has_value()) {
    if (std::find(priority_receive_friends.begin(),
                  priority_receive_friends.end(),
                  previous_success_receive_friend.value()) ==
        priority_receive_friends.end()) {
      priority_receive_friends.push_back(
          previous_success_receive_friend.value());
    }
  }

  // Get the proritized addresses if we can.
  vector<db::Address> receive_addresses;
  vector<bool> receive_addresses_is_dummy;
  for (auto i = 0;
       i < std::min(RECEIVE_FRIENDS_PER_ROUND,
                    static_cast<int>(priority_receive_friends.size()));
       i++) {
    try {
      auto f = G.db->get_friend_address(priority_receive_friends.at(i));
      receive_addresses.push_back(f);
      receive_addresses_is_dummy.push_back(false);
    } catch (const rust::Error& e) {
      continue;
    }
  }

  //    Last priority: random! let's fill in the rest of the indices
  auto receive_friends_old_size = receive_addresses.size();
  for (size_t i = 0; i < RECEIVE_FRIENDS_PER_ROUND - receive_friends_old_size;
       i++) {
    // note: we do not need cryptographic randomness here. randomness is only
    // for liveness

    // get a vector of recieve uids
    rust::Vec<int> receive_uids;
    for (auto& r : receive_addresses) {
      receive_uids.push_back(r.uid);
    }

    try {
      auto f = G.db->get_random_enabled_friend_address_excluding(receive_uids);

      receive_addresses.push_back(f);
      receive_addresses_is_dummy.push_back(false);
    } catch (const rust::Error& e) {
      // dummy if no friends left :')
      receive_addresses.push_back(dummy_address.value());
      receive_addresses_is_dummy.push_back(true);
    }
  }
  assert(receive_addresses.size() == RECEIVE_FRIENDS_PER_ROUND);

  // -----
  // Step 2: execute the PIR queries
  // -----

  // create a vector of read_indices
  vector<uint32_t> read_indices;
  for (auto& r : receive_addresses) {
    read_indices.push_back(r.read_index);
  }

  auto pir_replies = batch_retrieve_pir(client, read_indices);

  assert(pir_replies.size() == RECEIVE_FRIENDS_PER_ROUND);

  previous_success_receive_friend = std::nullopt;

  check_rep();

  // -----
  // Step 3: process the PIR replies, and store them in the database
  // -----
  for (auto i = 0; i < RECEIVE_FRIENDS_PER_ROUND; i++) {
    if (receive_addresses_is_dummy.at(i)) {
      continue;
    }
    auto& f = receive_addresses.at(i);
    if (pir_replies.at(i).ok()) {
      auto& reply = pir_replies.at(i).value();

      // Transactions and atomicity matter here.
      // Think carefully about what needs to be atomic when editing here.
      // Remember that atomicity can only happen in Rust.

      //
      // Step 3(a): Record the ACK in the database.
      //
      auto ack_answer = reply.pir_answer_acks();
      auto ack_answer_obj = client.answer_from_string(ack_answer);
      auto ack_decoded = client.decode(ack_answer_obj, f.read_index);
      auto decrypted_ack_status =
          decrypt_ack_row(ack_decoded, rust_u8Vec_to_string(f.read_key));
      if (decrypted_ack_status.ok()) {
        auto decrypted_ack = decrypted_ack_status.value();

        auto new_ack = G.db->receive_ack(f.uid, decrypted_ack);
        if (new_ack) {
          ASPHR_LOG_INFO("Received new ACK from friend.", friend_uid, f.uid);
          just_acked_friend = f.uid;
        }
      } else {
        ASPHR_LOG_INFO("Could not decrypt ACK from friend.", friend_uid, f.uid);
      }

      //
      // Step 3(b): Record the message in the database.
      //
      auto answer = reply.pir_answer();
      auto answer_obj = client.answer_from_string(answer);
      auto decoded = client.decode(answer_obj, f.read_index);

      auto decrypted =
          crypto::decrypt_receive(decoded, rust_u8Vec_to_string(f.read_key));
      if (decrypted.ok()) {
        auto& chunk = decrypted.value();

        if (chunk.sequence_number() == 0) {
          ASPHR_LOG_INFO(
              "Received empty garbage-message for security purposes.",
              friend_uid, f.uid);
          return;
        }

        // TODO: we probably don't want to cast to int32 here... let's use
        // int64s everywhere
        G.db->receive_chunk(
            (db::IncomingChunkFragment){
                .from_friend = f.uid,
                .sequence_number = static_cast<int>(chunk.sequence_number()),
                .chunks_start_sequence_number =
                    static_cast<int>(chunk.chunks_start_sequence_number()),
                .content = chunk.msg()},
            static_cast<int>(chunk.num_chunks()));

        previous_success_receive_friend = std::optional<int>(f.uid);
      } else {
        ASPHR_LOG_INFO(
            "Failed to decrypt message (message was probably not for us, "
            "which "
            "is okay).",
            decrypted_error_code, decrypted.status().code(),
            decrypted_error_message, decrypted.status().message());
      }
    } else {
      ASPHR_LOG_ERR("Could not retrieve PIR reply from server.", friend_uid,
                    f.uid, server_status_code,
                    pir_replies.at(i).status().code(), server_status_message,
                    pir_replies.at(i).status().message());
    }
  }

  check_rep();
}

auto Transmitter::send() -> void {
  check_rep();

  if (!G.db->has_registered()) {
    ASPHR_LOG_INFO("Not registered, so not sending messages.");
    return;
  }

  setup_registration_caching();

  auto send_info = G.db->get_send_info();

  rust::Vec<int> prioritized_friends;
  if (just_acked_friend.has_value()) {
    prioritized_friends.push_back(just_acked_friend.value());
  }
  string write_key;
  asphrclient::Message message;
  try {
    auto chunk_to_send = G.db->chunk_to_send(prioritized_friends);
    just_sent_friend = chunk_to_send.to_friend;
    write_key = rust_u8Vec_to_string(chunk_to_send.write_key);

    message.set_sequence_number(chunk_to_send.sequence_number);
    message.set_msg(std::string(chunk_to_send.content));
    if (chunk_to_send.num_chunks > 1) {
      message.set_num_chunks(chunk_to_send.num_chunks);
      message.set_chunks_start_sequence_number(
          chunk_to_send.chunks_start_sequence_number);
    }
  } catch (const rust::Error& e) {
    ASPHR_LOG_INFO("No chunks to send (probably).", error_msg, e.what());
    just_sent_friend = std::nullopt;
    write_key = rust_u8Vec_to_string(dummy_address.value().write_key);
    message.set_sequence_number(0);
    message.set_msg("fake message");
  }

  auto encrypted_chunk_status = crypto::encrypt_send(message, write_key);
  if (!encrypted_chunk_status.ok()) {
    ASPHR_LOG_ERR("Could not encrypt message.", error_msg,
                  encrypted_chunk_status.status().message());
    return;
  }
  auto encrypted_chunk = encrypted_chunk_status.value();

  auto acks_to_send_rustvec = G.db->acks_to_send();
  auto acks_to_send =
      std::vector(acks_to_send_rustvec.begin(), acks_to_send_rustvec.end());
  auto encrypted_acks_status = encrypt_ack_row(acks_to_send, write_key);
  if (!encrypted_acks_status.ok()) {
    ASPHR_LOG_ERR("Could not encrypt ACKs.", error_msg,
                  encrypted_acks_status.status().message());
    return;
  }
  auto encrypted_acks = encrypted_acks_status.value();

  ASPHR_LOG_INFO("Sending chunk.", friend_uid, just_sent_friend.value_or(-1),
                 index, send_info.allocation, auth_token,
                 std::string(send_info.authentication_token));

  check_rep();

  // call register rpc to send the register request
  asphrserver::SendMessageInfo request;

  request.set_index(send_info.allocation);
  request.set_authentication_token(std::string(send_info.authentication_token));

  string encrypted_chunk_string = "";
  for (auto& c : encrypted_chunk) {
    encrypted_chunk_string += c;
  }
  request.set_message(encrypted_chunk_string);

  string encrypted_acks_string = "";
  for (auto& c : encrypted_acks) {
    encrypted_acks_string += c;
  }
  request.set_acks(encrypted_acks_string);

  asphrserver::SendMessageResponse reply;

  grpc::ClientContext context;

  grpc::Status status = stub->SendMessage(&context, request, &reply);

  if (status.ok()) {
    ASPHR_LOG_INFO("Sent chunk.", friend_uid, just_sent_friend.value_or(-1),
                   index, send_info.allocation, auth_token,
                   std::string(send_info.authentication_token));
  } else {
    ASPHR_LOG_ERR("Could not send chunk.", friend_uid,
                  just_sent_friend.value_or(-1), index, send_info.allocation,
                  auth_token, std::string(send_info.authentication_token),
                  server_status_code, status.error_code(),
                  server_status_message, status.error_message());
  }
  check_rep();
}

auto Transmitter::batch_retrieve_pir(FastPIRClient& client,
                                     vector<pir_index_t> indices)
    -> vector<asphr::StatusOr<asphrserver::ReceiveMessageResponse>> {
  // TODO: use batch PIR here!!! we don't want to do this many PIR requests
  vector<asphr::StatusOr<asphrserver::ReceiveMessageResponse>> pir_replies;

  for (auto& index : indices) {
    asphrserver::ReceiveMessageInfo request;

    // Remember: for security, CLIENT_DB_ROWS *needs* to be hardcoded
    auto query = client.query(index, CLIENT_DB_ROWS);

    auto serialized_query = query.serialize_to_string();

    request.set_pir_query(serialized_query);

    asphrserver::ReceiveMessageResponse reply;
    grpc::ClientContext context;

    grpc::Status status = stub->ReceiveMessage(&context, request, &reply);

    if (status.ok()) {
      pir_replies.push_back(reply);
    } else {
      pir_replies.push_back(absl::UnknownError(
          "ReceiveMessage RPC failed with error: " + status.error_message()));
    }
  }

  return pir_replies;
}

auto Transmitter::check_rep() const noexcept -> void {
  ASPHR_ASSERT(G.alive());

  ASPHR_ASSERT_EQ_MSG(
      cached_pir_client.has_value(), cached_pir_client_secret_key.has_value(),
      "cached_pir_client and cached_pir_client_status are not in sync");
  ASPHR_ASSERT_EQ_MSG(cached_pir_client.has_value(), dummy_address.has_value(),
                      "cached_pir_client and dummy_address are not in sync");
}