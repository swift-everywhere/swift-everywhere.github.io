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
