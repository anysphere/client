//
// Copyright 2022 Anysphere, Inc.
// SPDX-License-Identifier: GPL-3.0-only
//

#include "transmitter.hpp"

#include <algorithm>

#include "schema/server.grpc.pb.h"

auto generate_dummy_address(const Global& G, const db::Registration& reg)
    -> db::Address {
  auto dummy_friend_keypair = crypto::generate_kx_keypair();

  // convert reg.kx_public_key, kx_private_key to a string

  auto kx_public_key_str = rust_u8Vec_to_string(reg.kx_public_key);
  auto kx_private_key_str = rust_u8Vec_to_string(reg.kx_private_key);

  auto dummy_read_write_keys = crypto::derive_read_write_keys(
      kx_public_key_str, kx_private_key_str, dummy_friend_keypair.first);

  // convert dummy_read_write_keys to a rust::Vec<uint8_t>
  auto read_key_vec_rust = string_to_rust_u8Vec(dummy_read_write_keys.first);
  auto write_key_vec_rust = string_to_rust_u8Vec(dummy_read_write_keys.second);

  return (db::Address){-1,
                       reg.friend_request_public_key,
                       "this is a dummy",
                       reg.kx_public_key,
                       0,
                       0,
                       read_key_vec_rust,
                       write_key_vec_rust};
}

Transmitter::Transmitter(Global& G, shared_ptr<asphrserver::Server::Stub> stub)
    : G(G), stub(stub), next_async_friend_request_retrieve_index(0) {
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
                                  const string& dummy_write_key)
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
      auto ack = crypto::encrypt_ack(0, dummy_write_key);
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

  auto friends_to_receive_from = string("");
  for (auto& r : receive_addresses) {
    friends_to_receive_from += std::to_string(r.uid) + ",";
  }
  ASPHR_LOG_INFO("Receiving messages from the following friends.", friend_uids,
                 friends_to_receive_from);

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
        } else {
          ASPHR_LOG_INFO("Received real chunk from friend.", friend_uid, f.uid,
                         sequence_number, chunk.sequence_number(),
                         chunks_start_sequence_number,
                         chunk.chunks_start_sequence_number(), num_chunks,
                         chunk.num_chunks(), chunk_content, chunk.msg());
        }

        // we don't set these fields if we only have one chunk
        auto num_chunks = chunk.num_chunks() > 1 ? chunk.num_chunks() : 1;
        auto chunks_start_sequence_number =
            chunk.num_chunks() > 1 ? chunk.chunks_start_sequence_number()
                                   : chunk.sequence_number();

        // TODO: we probably don't want to cast to int32 here... let's use
        // int64s everywhere
        auto receive_chunk_status = G.db->receive_chunk(
            (db::IncomingChunkFragment){
                .from_friend = f.uid,
                .sequence_number = static_cast<int>(chunk.sequence_number()),
                .chunks_start_sequence_number =
                    static_cast<int>(chunks_start_sequence_number),
                .content = chunk.msg()},
            static_cast<int>(num_chunks));
        if (receive_chunk_status ==
            db::ReceiveChunkStatus::NewChunkAndNewMessage) {
          std::lock_guard<std::mutex> l(G.message_notification_cv_mutex);
          G.message_notification_cv.notify_all();
        }

        if (receive_chunk_status == db::ReceiveChunkStatus::NewChunk ||
            receive_chunk_status ==
                db::ReceiveChunkStatus::NewChunkAndNewMessage) {
          previous_success_receive_friend = std::optional<int>(f.uid);
        }
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
  // Crawl the async friend request database
  // TODO: we could accelerate / deccelerate this as the client desires/
  // by changing ASYNC_FRIEND_REQUEST_BATCH_SIZE
  int start_index = next_async_friend_request_retrieve_index;
  int end_index = std::min(next_async_friend_request_retrieve_index +
                               ASYNC_FRIEND_REQUEST_BATCH_SIZE,
                           CLIENT_DB_ROWS);
  // call the server to retrieve the async friend requests
  retrieve_async_friend_request(start_index, end_index);
  if (end_index == CLIENT_DB_ROWS) {
    next_async_friend_request_retrieve_index = 0;
  } else {
    next_async_friend_request_retrieve_index = end_index;
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
  auto encrypted_acks_status = encrypt_ack_row(
      acks_to_send, rust_u8Vec_to_string(dummy_address.value().write_key));
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
  context.set_deadline(std::chrono::system_clock::now() +
                       std::chrono::seconds(60));

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
  transmit_async_friend_request();
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
    context.set_deadline(std::chrono::system_clock::now() +
                         std::chrono::seconds(60));

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

//----------------------------------------------------------------
//----------------------------------------------------------------
//|||      BELOW ARE METHODS FOR ASYNC FRIEND REQUESTS         |||
//----------------------------------------------------------------
//----------------------------------------------------------------

auto Transmitter::transmit_async_friend_request() -> void {
  // retrieve the friend request from DB
  std::vector<db::Friend> async_friend_requests = {};
  std::vector<db::Address> async_friend_requests_address = {};
  try {
    auto async_friend_requests_rs = G.db->get_outgoing_async_friend_requests();
    for (auto db_friend : async_friend_requests_rs) {
      async_friend_requests.push_back(db_friend);
      async_friend_requests_address.push_back(
          G.db->get_friend_address(db_friend.uid));
    }
  } catch (const rust::Error& e) {
    ASPHR_LOG_INFO("No async friend requests to send (probably).", error_msg,
                   e.what());
    return;
  }
  // TODO: allow us to send multiple friend requests at once
  // Right now, we only send one friend request at once
  // We can change this later if we want to.
  // TODO: send a dummy friend request if we have no friend requests to send
  if (async_friend_requests.size() == 0) {
    return;
  }
  // send the friend request
  db::Friend async_friend = async_friend_requests[0];
  db::Address async_friend_address = async_friend_requests_address[0];

  // we need to compute the id for both parties
  // We declare these outside cause I don't want to everything wrapped in
  // try-catch
  string my_id;  // we could probably cache this in DB, but we don't need to
  string my_friend_request_private_key;
  string friend_id;
  db::Registration reg_info;
  try {
    reg_info = G.db->get_registration();
    my_id = std::string(reg_info.public_id);
    my_friend_request_private_key =
        rust_u8Vec_to_string(reg_info.friend_request_private_key);
    friend_id = std::string(async_friend.public_id);
  } catch (const rust::Error& e) {
    // ASPHR_LOG_ERR("Could not generate user ID.", error_msg, e.what());
    return;
  }
  // encrypt the friend request
  auto encrypted_friend_request_status_ = crypto::encrypt_async_friend_request(
      my_id, my_friend_request_private_key, friend_id,
      std::string(async_friend_address.friend_request_message));
  if (!encrypted_friend_request_status_.ok()) {
    ASPHR_LOG_ERR("Error encrypting async friend request: ", "Error Message",
                  encrypted_friend_request_status_.status().ToString());
    return;
  }
  auto encrypted_friend_request = encrypted_friend_request_status_.value();
  // Send to server
  asphrserver::AddFriendAsyncInfo request;
  request.set_index(reg_info.allocation);
  request.set_authentication_token(std::string(reg_info.authentication_token));
  request.set_request(encrypted_friend_request);
  asphrserver::AddFriendAsyncResponse reply;
  grpc::ClientContext context;
  grpc::Status status = stub->AddFriendAsync(&context, request, &reply);
  if (status.ok()) {
    ASPHR_LOG_INFO("Async Friend Request sent to server!");
  } else {
    ASPHR_LOG_ERR(
        "Communication with server failed when sending friend request",
        "error_code", status.error_code(), "details", status.error_details());
  }
  return;
}

// retrieve and process async friend request from the server
// and push them to the database
// It is important to define the behavior of this function in the case of
// duplicate requests. i.e. when a friend (request) with the same public key
// is already in the database. Here's the definition for now.
// 1. If the friend is marked as deleted, then we ignore the request.
// 2. If the friend is marked as accepted, then we ignore the request.
// 3. If the friend is marked as incoming, then we ignore the request.
// 4. If the friend is marked as outgoing, then we approve this request
// immediately.
auto Transmitter::retrieve_async_friend_request(int start_index, int end_index)
    -> void {
  // check input
  if (start_index < 0 || end_index < 0 || start_index > end_index ||
      end_index - start_index > ASYNC_FRIEND_REQUEST_BATCH_SIZE) {
    // TODO: I should ask arvid how to use ASPHR_LOG
    // ASPHR_LOG_ERR("Invalid input for retrieve_async_friend_request.",
    //              start_index, end_index);
    return;
  }

  // STEP 1: ask the server for all the friend database entries
  asphrserver::GetAsyncFriendRequestsInfo request;
  request.set_start_index(start_index);
  request.set_end_index(end_index);
  asphrserver::GetAsyncFriendRequestsResponse reply;

  grpc::ClientContext context;
  grpc::Status status = stub->GetAsyncFriendRequests(&context, request, &reply);
  if (!status.ok()) {
    std::stringstream ss;
    ss << status.error_code() << ": " << status.error_message()
       << " details:" << status.error_details() << std::endl;

    // ASPHR_LOG_ERR("Could not retrieve async friend requests.", error_msg,
    //              ss.str());
  }

  if (reply.friend_request_public_key_size() != reply.requests_size()) {
    ASPHR_LOG_ERR("Response is malformed!",
                  "size1:", reply.friend_request_public_key_size(),
                  "size2:", reply.requests_size());
  }
  // Step 2: iterate over the returned friend requests
  // we need to obtain our own id here
  string my_id;
  string my_friend_request_private_key;
  db::Registration reg_info;
  try {
    reg_info = G.db->get_registration();
    my_id = std::string(reg_info.public_id);
    my_friend_request_private_key =
        rust_u8Vec_to_string(reg_info.friend_request_private_key);
  } catch (const rust::Error& e) {
    ASPHR_LOG_ERR("Failed to retrieve registration from db.", "error_msg",
                  e.what());
    return;
  }
  std::map<string, db::Friend> friends = {};
  for (int i = 0; i < reply.requests_size(); i++) {
    // Step 2.1: test if the friend request is meant for us
    // For now, we attach the friend_public_key along with every request.
    // decrypt the friend request
    string friend_request = reply.requests(i);
    string friend_public_key = reply.friend_request_public_key(i);
    auto decrypted_friend_request_status =
        crypto::decrypt_async_friend_request_public_key_only(
            my_id, my_friend_request_private_key, friend_public_key,
            friend_request);
    if (!decrypted_friend_request_status.ok()) {
      // not meant for us!
      continue;
    }
    // the friend request is meant for us
    // Step 2.2: unpack the friend request
    auto [friend_id, friend_message] = decrypted_friend_request_status.value();
    ASPHR_LOG_INFO("Found async friend request!", public_id, friend_id, message,
                   friend_message);
    // unpack the friend id
    auto friend_id_unpacked_ = crypto::decode_user_id(friend_id);
    if (!friend_id_unpacked_.ok()) {
      // ASPHR_LOG_ERR("Read Malformed friend ID.", "Err",
      //               friend_id_unpacked_.status());
      continue;
    }
    auto [friend_name, friend_allocation, friend_kx_public_key,
          friend_request_public_key] = friend_id_unpacked_.value();
    // currently the name is not transmitted. Check that
    if (friend_name != "") {
      // ASPHR_LOG_ERR("Friend name is not empty.", "Err", friend_name);
      continue;
    }
    // do the key exchange here.
    auto my_kx_public_key = rust_u8Vec_to_string(reg_info.kx_public_key);
    auto my_kx_private_key = rust_u8Vec_to_string(reg_info.kx_private_key);
    // derive read and write keys.
    auto [read_key, write_key] = crypto::derive_read_write_keys(
        my_kx_public_key, my_kx_private_key, friend_kx_public_key);

    // Step 2.3: check for duplicate requests
    // 1. If the friend is marked as deleted, then we ignore the request.
    // 2. If the friend is marked as accepted, then we ignore the request.
    // 3. If the friend is marked as incoming, then we ignore the request.
    // 4. If the friend is marked as outgoing, then we approve this request

    // I'll just scan over the entire friend db
    // This will be changed later

    try {
      auto all_friends = G.db->get_friends_all_status();
      for (auto db_friend : all_friends) {
        // check the id
        if (db_friend.public_id == friend_id) {
          // check the status
          if (db_friend.deleted) {
            // ignore this request
            ASPHR_LOG_INFO("Ignoring friend request because friend is deleted.",
                           "Friend ID", friend_id);
            continue;
          } else if (db_friend.progress == ACTUAL_FRIEND) {
            // ignore this request
            ASPHR_LOG_INFO(
                "Ignoring friend request because friend is accepted.",
                "Friend ID", friend_id);
            continue;
          } else if (db_friend.progress == INCOMING_REQUEST) {
            // ignore this request
            ASPHR_LOG_INFO(
                "Ignoring friend request because friend is incoming.",
                "Friend ID", friend_id);
            continue;
          } else if (db_friend.progress == OUTGOING_REQUEST) {
            // approve this request
            ASPHR_LOG_INFO(
                "Approving friend request because friend is outgoing.",
                "Friend ID", friend_id);
            // update the friend status
            G.db->approve_async_friend_request(db_friend.unique_name,
                                               MAX_FRIENDS);
            continue;
          }
        }
      }
    } catch (const rust::Error& e) {
      // ASPHR_LOG_ERR("Could not find friend ID.", "Error", e.what());
      continue;
    }
    // Step 2.4: if we get here, then we have a new friend request
    // we need to create a new friend entry in the database
    // Note: the current design decision is to not transmit the actual name of
    // the friend
    // so we just set both unique name and display name to public id
    db::FriendFragment new_friend = {.unique_name = friend_id,
                                     .display_name = friend_id,
                                     .public_id = friend_id,
                                     .progress = INCOMING_REQUEST,
                                     .deleted = false};
    db::AddAddress new_address = {
        .unique_name = friend_id,
        .friend_request_public_key =
            string_to_rust_u8Vec(friend_request_public_key),
        .friend_request_message = friend_message,
        .kx_public_key = string_to_rust_u8Vec(friend_kx_public_key),
        .read_index = friend_allocation,
        .read_key = string_to_rust_u8Vec(read_key),
        .write_key = string_to_rust_u8Vec(write_key),
    };
    try {
      G.db->add_incoming_async_friend_requests(new_friend, new_address);
    } catch (const rust::Error& e) {
      // ASPHR_LOG_ERR("Could not add friend.", "Error", e.what());
      continue;
    }
  }
}

auto Transmitter::check_rep() const noexcept -> void {
  ASPHR_ASSERT(G.alive());

  ASPHR_ASSERT_EQ_MSG(
      cached_pir_client.has_value(), cached_pir_client_secret_key.has_value(),
      "cached_pir_client and cached_pir_client_status are not in sync");
  ASPHR_ASSERT_EQ_MSG(cached_pir_client.has_value(), dummy_address.has_value(),
                      "cached_pir_client and dummy_address are not in sync");
}