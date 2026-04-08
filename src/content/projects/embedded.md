---
title: Embedded Swift
tagline: Swift on microcontrollers and bare-metal targets.
description: Notes on the Embedded Swift language mode, supported chips, and example firmware projects.
tag: embedded
icon: memory
tint: "#EF4444"
order: 3
featured: true
---

**Embedded Swift** brings the language to microcontrollers and other
resource-constrained environments without the standard library overhead.
This workstream tracks board support, examples, and the evolution of the
Embedded language mode itself.

## Topics

- Toolchain setup for ARM Cortex-M and RISC-V boards
- Memory and binary-size guidelines
- Hardware peripheral examples and FFI bindings

## From swift.org

Embedded Swift is a first-class compilation mode in the official Swift
toolchain. The canonical resources are:

- [Get started with Embedded Swift](https://www.swift.org/get-started/embedded/)
  — swift.org's landing page for Embedded Swift, including
  microcontroller examples and recommended next steps.
- [Embedded Swift documentation](https://docs.swift.org/embedded/documentation/embedded)
  — the full reference, including
  [ways to get started](https://docs.swift.org/embedded/documentation/embedded/waystogetstarted)
  on real hardware.
- [`swift-embedded-examples`](https://github.com/swiftlang/swift-embedded-examples)
  — official sample projects for ARM Cortex-M, RISC-V, the Raspberry Pi
  Pico (RP2040), STM32, ESP32, nRF, and more.
- [Embedded Swift vision document](https://github.com/swiftlang/swift-evolution/blob/main/visions/embedded-swift.md)
  — the design rationale for the Embedded Swift language subset.
