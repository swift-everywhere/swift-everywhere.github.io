---
title: Android build status, automated
description: How the swift-android-action keeps the Swift package ecosystem honest about Android support.
pubDate: 2026-03-20
tags: ["android"]
---

The [Android build status page](/android-builds/) is regenerated daily by
running the `swift-android-action` against thousands of Swift packages.
Packages that build cleanly for Linux are great candidates for Android,
and the report makes it easy to see which ones already work and which
need a little help.
