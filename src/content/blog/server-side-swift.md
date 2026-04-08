---
title: Slim container images for Swift services
description: Notes on producing the smallest possible runtime images for Swift server workloads.
pubDate: 2026-02-12
tags: ["server"]
---

Multi-stage Docker builds and the static Linux SDK can shrink a typical
Swift server image to just a few megabytes. The trick is making sure the
runtime stage carries only the binary and the handful of shared libraries
it actually needs.
