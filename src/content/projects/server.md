---
title: Swift on the Server
tagline: Production Swift for backends, services, and tooling.
description: Patterns, libraries, and deployment notes for running Swift workloads on Linux servers and in containers.
tag: server
icon: dns
tint: "#06B6D4"
order: 2
featured: true
---

Swift on the **server** has matured rapidly thanks to projects like
SwiftNIO, Vapor, and Hummingbird. The Swift Everywhere server workstream
collects deployment recipes, container images, and benchmarks aimed at
real-world production use.

## Focus areas

- Minimal, reproducible container images for Swift services
- Performance comparisons across Linux distributions and architectures
- Cross-compilation from macOS hosts to Linux targets

## From swift.org

Swift on the server has official backing through the Swift Server
Workgroup (SSWG). Start with these:

- [Swift on Server documentation](https://www.swift.org/documentation/server/)
  — the umbrella for guides on building, packaging, deploying, and
  operating Swift services in production.
- [Build a web service with Vapor](https://www.swift.org/getting-started/vapor-web-server/)
  — the canonical "hello world" for a Swift backend, walking through
  Vapor on macOS and Linux.
- [Server-side packaging guide](https://www.swift.org/documentation/server/guides/packaging.html)
  and the
  [deployment guide](https://www.swift.org/documentation/server/guides/deployment.html)
  — recommended patterns for shipping Swift services to production.
- [Swift Server Workgroup (SSWG)](https://www.swift.org/sswg/) —
  charter, meeting minutes, and the incubation process for
  community-supported server libraries.
- [Build cloud services with Swift](https://www.swift.org/use-case/) —
  swift.org's high-level overview of the server use case.
