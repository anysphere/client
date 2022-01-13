/*******************************************************************************
 * CLI - A simple command line interface.
 * Copyright (C) 2016-2021 Daniele Pallastrelli
 *
 * Boost Software License - Version 1.0 - August 17th, 2003
 *
 * Permission is hereby granted, free of charge, to any person or organization
 * obtaining a copy of the software and accompanying documentation covered by
 * this license (the "Software") to use, reproduce, display, distribute,
 * execute, and transmit the Software, and to prepare derivative works of the
 * Software, and to permit third-parties to whom the Software is furnished to
 * do so, all subject to the following:
 *
 * The copyright notices in the Software and this entire statement, including
 * the above license grant, this restriction and the following disclaimer,
 * must be included in all copies of the Software, in whole or in part, and
 * all derivative works of the Software, unless such copies or derivative
 * works are solely in the form of machine-executable object code generated by
 * a source language processor.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. IN NO EVENT
 * SHALL THE COPYRIGHT HOLDERS OR ANYONE DISTRIBUTING THE SOFTWARE BE LIABLE
 * FOR ANY DAMAGES OR OTHER LIABILITY, WHETHER IN CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 ******************************************************************************/

#include "as_cli.hpp"

#include "inbox.hpp"

using asphrdaemon::Daemon;

int main(int argc, char** argv) {
  // setup cli

  Message message_to_send;
  // Friend friend_to_add;
  static Profile kProfile_;
  static Inbox kInbox_;

  static Friend::FriendMap kFriends_map_;

  auto help =
      StrCat("Usage: \n",
             // register
             "asphr register: {name}\n",
             // init-friend
             "asphr init-friend: {name}\n",
             // TODO: add-friend must have an init-friend before
             "asphr add-friend: {name} {key}\n",
             // TODO: explain the options better.
             "asphr (s | m | send | msg | message) {name}\n",
             "asphr (get-friends | friends)\n",
             // TODO: explain that -a is optional.
             "asphr (inbox | i) [-a | -all]\n", "asphr socket {address}\n");

  CommandLine cmd_line{argc, argv, help};

  auto command_status = cmd_line.getArgument(1);

  if (!command_status.ok()) {
    cout << command_status.status();
  };

  auto command = command_status.value();

  // set up the unix socket
  auto socket_address = DEFAULT_SOCKET_ADDRESS;

  if (cmd_line.getOption("socket")) {
    socket_address = cmd_line.getOptionValue("socket", socket_address).value();
  }

  // connect to the anysphere daemon
  cout << "Client connecting to socket: " << socket_address << endl;
  auto channel =
      grpc::CreateChannel(socket_address, grpc::InsecureChannelCredentials());
  auto stub = Daemon::NewStub(channel);

  // parse the commands

  if (command == "register") {
    auto name = cmd_line.getArgument(2).value();
    kProfile_.set_name(name);

    kProfile_.add(stub);
  } else if (command == "init-friend") {
    auto name = cmd_line.getArgument(2).value();
    Friend friend_to_add(name);
    kFriends_map_[name] = friend_to_add;

    auto status = friend_to_add.generate_key(stub);

    if (!status.ok()) {
      return 0;
    }
    auto key = status.value();
    cout << "Friend " << name << " key generated!" << endl;
    cout << "Please give your friend the following key: " << key << endl;
    cout << "When they give you back their shared key, you can then add them "
            "with the command add-friend {their key}"
         << endl;
  } else if (command == "add-friend") {
    auto name = cmd_line.getArgument(2).value();
    auto key = cmd_line.getArgument(3).value();
    Friend friend_to_add(name);

    kFriends_map_[name] = friend_to_add;
    auto status = friend_to_add.add(stub, key);

    if (!status.ok()) {
      return 0;
    }

    cout << "Friend " << name << " added!" << endl;
    cout << "Yipppeeee!" << endl;
    cout << "You can now talk to them with the command 'message' {their name}"
         << endl;
  } else if (command == "s" || command == "m" || command == "send" ||
             command == "msg" || command == "message") {
    auto name = cmd_line.getArgument(2).value();
    auto msg = cmd_line.getConcatArguments(3).value();

    Message m{msg, name, kProfile_.name_};
    m.send(stub);

  } else if (command == "inbox" || command == "i") {
    cout << "Inbox:" << endl;
    kInbox_.update(stub, kProfile_.name_);
    for (auto& [time, message] : kInbox_.get_messages()) {
      cout << absl::FormatTime(time, absl::UTCTimeZone()) << ": "
           << message.msg_ << endl;
    }
  } else if (command == "get-friends" || command == "friends") {
    cout << "Friends:" << endl;

    auto status = kProfile_.get_friends(stub);

    if (!status.ok()) {
      return 0;
    }
    kFriends_map_ = status.value();
    for (auto& [name, friend_] : kFriends_map_) {
      cout << name << endl;
    }

  } else {
    cout << "Unknown command: " << command << endl;
    return 1;
  }

  return 0;
}
