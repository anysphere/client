mod cli;

fn main() {
  use std::env;
  let args: Vec<String> = env::args().collect();

  let result = cli::cli(args);
  ffi::main_cc(result);
}

#[cxx::bridge]
mod ffi {
  unsafe extern "C++" {
    include!("daemon/main.hpp");
    fn main_cc(args: Vec<String>) -> i32;
  }
}