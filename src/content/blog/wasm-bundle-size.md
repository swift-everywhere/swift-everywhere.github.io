---
title: Trimming Swift WebAssembly bundles
description: Practical steps for shrinking SwiftWasm output before shipping it to the browser.
pubDate: 2026-01-15
tags: ["webassembly"]
---

A default SwiftWasm build can produce a multi-megabyte `.wasm` file, but
careful use of `wasm-opt`, dead-code stripping, and `--strip-all` can
bring it down dramatically. This post walks through the optimisation
pipeline we use for the Swift Everywhere demos.
