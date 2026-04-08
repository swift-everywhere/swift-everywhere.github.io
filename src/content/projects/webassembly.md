---
title: Swift for WebAssembly
tagline: Compile Swift to Wasm and run it in browsers and edge runtimes.
description: SwiftWasm toolchain, JavaScriptKit, and recipes for shipping Swift to the web.
tag: webassembly
icon: webassembly
iconLiteral: true
tint: "#654ff0"
order: 4
featured: true
---

Swift compiles to **WebAssembly** through the SwiftWasm project, opening
the door to running Swift in browsers, serverless edge runtimes, and any
host that speaks Wasm. This workstream tracks toolchain releases, browser
interop, and binary-size optimisation.

## Highlights

- SwiftWasm SDK installation and CI integration
- JavaScriptKit interop and DOM examples
- Strategies for trimming Wasm binary size

## From swift.org

WebAssembly is now an officially-supported Swift target. The canonical
starting point lives on swift.org:

- [Getting Started with Swift and WebAssembly](https://www.swift.org/documentation/articles/wasm-getting-started.html)
  — installs the Wasm SDK with `swiftly`, builds a "hello, world"
  module, and runs it in a Wasm runtime such as `wasmtime`.
- [Swift platform support](https://www.swift.org/platform-support/) —
  the up-to-date list of WebAssembly targets and toolchain releases.
- [SwiftWasm](https://swiftwasm.org/) — the community project that
  pioneered Swift on Wasm and continues to maintain JavaScriptKit and
  related interop libraries.
