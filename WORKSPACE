#
# Copyright 2022 Anysphere, Inc.
# SPDX-License-Identifier: GPL-3.0-only
#

load("@bazel_tools//tools/build_defs/repo:git.bzl", "git_repository")

git_repository(
    name = "asphr",
    commit = "e41dbfc18b1d0d9874689d515e2268ccd6a65946",  # autoupdate anysphere/asphr
    init_submodules = True,
    remote = "https://github.com/anysphere/asphr.git",
)
# for local builds, we add --override_repository=asphr=../asphr, which we do in setupgit.sh

load("@asphr//:asphr_load.bzl", "load_asphr_repos")

load_asphr_repos("@asphr")

load("@asphr//:asphr_load2.bzl", "load_asphr_repos2")

load_asphr_repos2()

load("@asphr//:asphr.bzl", "setup_asphr")

setup_asphr("@asphr")
