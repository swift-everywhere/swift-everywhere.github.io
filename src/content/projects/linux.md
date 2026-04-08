---
title: Swift on Linux Desktop
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
