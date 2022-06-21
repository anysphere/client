//
// Copyright 2022 Anysphere, Inc.
// SPDX-License-Identifier: GPL-3.0-only
//

#include "anysphere.hpp"

#include "transmitter.hpp"

int main(int argc, char** argv) {
  auto server_address = string("");
  auto socket_address = string("");
  auto config_file_address = string("");
  auto tls = true;

  vector<string> args(argv + 1, argv + argc);
  string infname;
  string outfname;

  auto override_default_round_delay = -1;

  // Loop over command-line args
  for (auto i = args.begin(); i != args.end(); ++i) {
    if (*i == "-h" || *i == "--help") {
      std::cout << "Syntax: daemon -s <server_address> -d <socket_address>"
                   " -c <config_file_address>"
                << std::endl;
      std::cout << "  -s <server_address>  Address to listen on (default: "
                << server_address << ")" << std::endl;
      std::cout << "  -d <socket_address>  Address of socket (default: "
                << socket_address << ")" << std::endl;
      std::cout
          << "  -c <config_file_address>  Address of config file (default: "
          << config_file_address << ")" << std::endl;
      std::cout
          << "  -r <round_delay>  Round delay in seconds (default: 60 seconds)"
          << std::endl;
      std::cout << "  --no-tls  Don't use TLS (default: use tls)" << std::endl;
      return 0;
    } else if (*i == "-s") {
      server_address = *++i;
    } else if (*i == "-d") {
      socket_address = *++i;
    } else if (*i == "-c") {
      config_file_address = *++i;
    } else if (*i == "-r") {
      override_default_round_delay = std::stoi(*++i);
    } else if (*i == "--no-tls") {
      tls = false;
    } else {
      std::cerr << "Unknown argument: " << *i << std::endl;
      return 1;
    }
  }

  if (socket_address.empty()) {
    socket_address = get_socket_path().string();
  }
  if (config_file_address.empty()) {
    config_file_address = get_config_file_address().string();
  }

  auto config = make_shared<Config>(config_file_address);

  if (override_default_round_delay > 0) {
    auto status = config->set_latency(override_default_round_delay);

    if (!status.ok()) {
      std::cerr << "Failed to set latency: " << status.message() << std::endl;
    }
  }

  if (server_address.empty()) {
    server_address = config->server_address();
  }

  auto msgstore = make_shared<Msgstore>(config->msgstore_address(), config);

  const Crypto crypto;

  // remove the socket file first
  remove(socket_address.c_str());

  // make it a socket address!
  socket_address = StrCat("unix://", socket_address);

  // connect to the anysphere servers
  ASPHR_LOG_INFO("Client querying server address.", server_address,
                 server_address);
  auto channel_creds = grpc::SslCredentials(
      grpc::SslCredentialsOptions{.pem_root_certs = AMAZON_ROOT_CERTS});

  if (!tls) {
    channel_creds = grpc::InsecureChannelCredentials();
  }
  shared_ptr<grpc::Channel> channel =
      grpc::CreateChannel(server_address, channel_creds);
  shared_ptr<asphrserver::Server::Stub> stub =
      asphrserver::Server::NewStub(channel);

  Transmitter transmitter(crypto, config, stub, msgstore);

  // set up the daemon rpc server
  auto daemon = DaemonRpc(crypto, config, stub, msgstore);
  grpc::ServerBuilder builder;
  builder.AddListeningPort(socket_address, grpc::InsecureServerCredentials());
  builder.RegisterService(&daemon);

  // start the daemon rpc server
  auto daemon_server = unique_ptr<grpc::Server>(builder.BuildAndStart());

  while (true) {
    auto killed =
        config->wait_until_killed_or_seconds(config->get_latency_seconds());
    if (killed) {
      daemon_server->Shutdown();
      ASPHR_LOG_INFO("Daemon killed.");
      break;
    }

    // do a round
    ASPHR_LOG_INFO("Client round.");

    // receive and then send! it is important! 2x speedup
    transmitter.retrieve_messages();
    transmitter.send_messages();

    // sleep for 100ms
  }

  return 0;
}