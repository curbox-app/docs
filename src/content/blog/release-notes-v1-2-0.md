---
title: "Curbox Release Notes: v1.2.0"
description: "What's new in Curbox v1.2.0 — Shizuku integration, redesigned analytics, category limits, and a raft of bug fixes."
pubDate: 2025-01-15
author: Curbox Team
tags: [release-notes, changelog]
---

We are happy to share Curbox v1.2.0, the biggest release since the initial launch. This update focuses on three things: more robust blocking, clearer analytics, and a calmer interface.

---

## Highlights

### Shizuku Integration

The headline feature of this release. Curbox now supports [Shizuku](https://shizuku.rikka.app/) as an alternative to the Accessibility Service for app blocking.

With Shizuku, Curbox can enforce blocks at the Android system level via the `ActivityManager` API — making it significantly harder to bypass a session by force-quitting the service. Users who care about the robustness of their focus practice will want to try this immediately.

See the [Shizuku setup guide](/advanced/shizuku/) for step-by-step instructions.

### Redesigned Analytics Screen

The analytics experience has been rebuilt from scratch. The new design centres on:

- A **24-hour usage timeline** at the top, showing your day at a glance
- Per-app **session count** and **average session length** (often more revealing than raw totals)
- A new **Focus Score** — a 0–100 composite metric calibrated to your personal baseline
- Weekly and monthly trend views

The old bar chart has been retired. Several users told us it felt like a report card. The new design aims to feel more like a mirror.

### Category Limits

You can now set limits on *categories* of apps rather than just individual apps. If you want to limit all social media to a combined 45 minutes per day without tracking Instagram, Twitter, and TikTok separately, this is the feature for you.

Categories are auto-suggested based on your app's Play Store / F-Droid metadata, or you can create custom categories.

---

## Improvements

- **Lock screen redesign**: cleaner, more calming, with better legibility at all text sizes
- **Scheduling**: Deep Work sessions can now be scheduled to start automatically at a set time
- **Widget**: a new 2×1 home screen widget showing your daily Focus Score and top used app
- **Themes**: added the new "Amber" warm theme and improved the "Slate" dark theme
- **Notifications**: reduced notification verbosity; the focus notification is now compact by default
- **Performance**: the analytics database has been refactored and query times reduced by ~60% on devices with 1+ year of data

---

## Bug Fixes

- Fixed: app limits were not enforced for apps launched from widgets on some Android 14 devices
- Fixed: Accessibility Service was incorrectly reporting "inactive" after device restart on Pixel devices
- Fixed: "End session" confirmation occasionally dismissing without waiting for the cooldown
- Fixed: Focus Score displaying as 0 for new users on their first full day
- Fixed: Dark mode inconsistencies in the onboarding flow
- Fixed: Crash when exporting analytics data in CSV format with special characters in app names

---

## Known Issues

- Shizuku deactivates on reboot (this is an Android/ADB constraint, not fixable by Curbox)
- Category limits may mis-categorise apps without Play Store metadata — manual re-categorisation is available
- Widget does not update in real-time on some custom launchers; refresh interval is 15 minutes

---

## Upgrading

Curbox v1.2.0 is a drop-in upgrade. No data migration is needed. If you are updating from v1.0.x, your limits, sessions, and analytics history will be preserved.

Download from [GitHub Releases](https://github.com/curbox-app/curbox/releases/tag/v1.2.0) or update via F-Droid.

---

## Thank You

This release is the direct result of community contributions: 12 pull requests from 8 contributors, and over 40 bug reports from users on GitHub and the community forum. Thank you.

If you want to be part of what comes next, see our [Contributing guide](/contribute/).
