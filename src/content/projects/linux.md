---
title: Swift on Linux
tagline: Swift for Linux desktop applications, tooling, and end-user software.
description: Building native desktop apps and developer tooling on Linux with Swift — distinct from the server workstream's focus on backends and services.
tag: linux
icon: linux
tint: "#EAB308"
order: 6
featured: true
---

The **Linux** workstream of Swift Everywhere focuses on Swift as a
language for **desktop and end-user software** on Linux distributions —
GUI applications, command-line tooling, and developer utilities. It is
deliberately separate from the [Server](/projects/server/) workstream,
which targets backend services, containerised workloads, and
production infrastructure.

## Focus areas

- Native GUI toolkits and bindings (GTK, Qt, and emerging
  cross-platform Swift UI libraries) for building Linux desktop apps in
  Swift.
- Packaging and distribution: producing `.deb`, `.rpm`, AppImage,
  Flatpak, and Snap bundles from Swift sources.
- Toolchain installation across major distributions, including the
  Swift Static Linux SDK for self-contained binaries.
- Desktop integration concerns: theming, window managers, file
  pickers, system trays, and freedesktop.org standards.
- Editor and IDE support for Swift on Linux outside of the Apple
  ecosystem.

## Why a separate project from "Server"?

Server workloads care about throughput, container size, and headless
deployment. Desktop software cares about UI responsiveness, native
look-and-feel, packaging for end users, and integration with the host
desktop environment. The two have very different constraints and
audiences, even though they share the same underlying Swift toolchain,
so we track them as independent workstreams.

## From swift.org

Linux is a tier-1 Swift platform. The official toolchain and SDK
documentation lives at swift.org:

- [Install Swift on Linux](https://www.swift.org/install/linux/) —
  packages and instructions for Ubuntu, Debian, Fedora, Amazon Linux,
  Red Hat UBI, and generic tarballs, plus the recommended
  [`swiftly`](https://www.swift.org/install/linux/swiftly/) toolchain
  installer.
- [Getting started with the Static Linux SDK](https://www.swift.org/documentation/articles/static-linux-getting-started.html)
  — build fully-statically-linked Swift binaries that run on any Linux
  distribution without external runtime dependencies. This is
  particularly useful for distributing desktop apps and command-line
  tools to end users.
- [Swift platform support](https://www.swift.org/platform-support/) —
  the up-to-date Linux distribution and architecture support matrix.
