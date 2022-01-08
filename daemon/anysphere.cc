
#include "anysphere.h"

#include "crypto.h"
#include "ui_msg.h"
#include "ui_urgent.h"

int main(int argc, char** argv) {
  std::string server_address("0.0.0.0:50051");
  std::string socket_address("unix:///var/run/anysphere.sock");

  auto send_messages_file_address = string(SEND_FILE);
  auto received_messages_file_address = string(RECEIVE_FILE);
  auto config_file_address = string(CONFIG_FILE);

  vector<string> args(argv + 1, argv + argc);
  string infname, outfname;

  // Loop over command-line args
  for (auto i = args.begin(); i != args.end(); ++i) {
    if (*i == "-h" || *i == "--help") {
      std::cout << "Syntax: daemon -a <server_address> -d <socket_address> -s "
                   "<send_messages_file_address> -r "
                   "<received_messages_file_address> -c <config_file_address>"
                << std::endl;
      std::cout << "  -a <server_address>  Address to listen on (default: "
                << server_address << ")" << std::endl;
      std::cout << "  -d <socket_address>  Address of socket (default: "
                << socket_address << ")" << std::endl;
      std::cout << "  -s <send_messages_file_address>  Address of send "
                   "messages file (default: "
                << send_messages_file_address << ")" << std::endl;
      std::cout << "  -r <received_messages_file_address>  Address of received "
                   "messages file (default: "
                << received_messages_file_address << ")" << std::endl;
      std::cout
          << "  -c <config_file_address>  Address of config file (default: "
          << config_file_address << ")" << std::endl;
      return 0;
    } else if (*i == "-a") {
      server_address = *++i;
    } else if (*i == "-d") {
      socket_address = *++i;
    } else if (*i == "-s") {
      send_messages_file_address = *++i;
    } else if (*i == "-r") {
      received_messages_file_address = *++i;
    } else if (*i == "-c") {
      config_file_address = *++i;
    }
  }

  read_config(config_file_address);

  Crypto crypto;

  // connect to the anysphere servers
  std::cout << "Client querying server address: " << server_address
            << std::endl;
  std::shared_ptr<Channel> channel =
      grpc::CreateChannel(server_address, grpc::InsecureChannelCredentials());
  std::unique_ptr<Messenger::Stub> stub = Messenger::NewStub(channel);

  // keep the duration in chrono for thread sleeping.
  constexpr auto duration = absl::Milliseconds(5000);

  // set the time to 0
  auto last_ui_timestamp = absl::Time();

  while (true) {
    absl::SleepFor(duration);
    // check for new ui write:

    // do a round
    std::cout << "Client round" << std::endl;

    cout << "send messages file address: " << send_messages_file_address
         << endl;
    process_ui_file(send_messages_file_address, last_ui_timestamp, stub,
                    crypto);
    last_ui_timestamp = absl::Now();
    // first send, then retrieve, so we have an updated db_rows
    cout << "received messages file address: " << received_messages_file_address
         << endl;
    retrieve_messages(received_messages_file_address, stub, crypto);

    // sleep for 100ms
  }

  return 0;
}
