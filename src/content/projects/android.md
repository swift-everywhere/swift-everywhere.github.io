---
title: Swift on Android
tagline: Build, run, and ship Swift code on Android devices.
description: Tooling, packages, and CI infrastructure for building Swift libraries and applications that target Android.
tag: android
icon: android
tint: "#22C55E"
order: 1
featured: true
repo: https://github.com/swift-everywhere/swift-android-action
---

The **Android** workstream of Swift Everywhere focuses on making Swift a
first-class citizen on Android. That means a working toolchain, reusable
GitHub Actions for CI, and a continually updated build status for the wider
Swift ecosystem.

## What's here

- The [`swift-android-action`](https://github.com/marketplace/actions/swift-android-action)
  GitHub Action used by hundreds of Swift packages to verify Android support.
- An automated build status report for the top Swift packages — see the
  [Android build status page](/android-builds/).
- Reference projects, sample apps, and migration notes published as
  blog posts below.

## Getting started

If you maintain a Swift package, the easiest way to add Android coverage is
to drop the `swift-android-action` into your existing GitHub Actions
workflow. Most pure-Swift packages will build with no source changes.

## From swift.org

The Android Workgroup at swift.org is the official home for Swift on
Android. Their documentation is the best starting point:

- [Getting started with the Swift SDK for Android](https://www.swift.org/documentation/articles/swift-sdk-for-android-getting-started.html)
  — the official walkthrough for installing the Android SDK for Swift
  and cross-compiling a Swift package for Android.
- [Swift Android Workgroup](https://www.swift.org/android-workgroup/) —
  charter, meeting notes, and roadmap for Swift's official Android effort.
- [Swift platform support overview](https://www.swift.org/platform-support/)
  — current support matrix, including Android.
