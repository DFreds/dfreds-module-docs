---
sidebar_position: 8
tags:
  - free
  - module
---

# Obvious Settings

<img src="https://img.shields.io/badge/Free-00aa00?style=for-the-badge"/>
<img src="https://img.shields.io/badge/Any%20System-00aaaa?style=for-the-badge"/>
<a target="_blank" href="https://foundryvtt.com/packages/dfreds-obvious-settings"><img src="https://img.shields.io/badge/Download-2e2e2e?style=for-the-badge"/></a>
<br />
<a target="_blank" href="https://github.com/DFreds/dfreds-obvious-settings"><img src="https://img.shields.io/github/v/release/DFreds/dfreds-obvious-settings?style=for-the-badge&label=Version"/></a>
<img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2FDFreds%2Fdfreds-obvious-settings%2Freleases%2Flatest%2Fdownload%2Fmodule.json&query=%24.compatibility.verified&style=for-the-badge&logo=foundryvirtualtabletop&label=Foundry%20Version&color=%23fe6a1f"/>
<br/>
<br/>

A FoundryVTT module that makes the settings configuration more obvious in various ways.

## Overview

Obvious Settings marks up Foundry's settings interface so each option's scope is
clear at a glance: a globe icon for world settings that apply to everyone, and a
user icon for client settings that are personal to each player. It also flags
any setting that is no longer at its default and shows what that default was.

![Obvious Settings](./img/showcase.png)

## Features

- Displays what settings are client based or world based
- Shows when a setting is not set to its default value

## Settings

| Setting                         | Scope  | Default | Description                                                                                                     |
| ------------------------------- | ------ | ------- | --------------------------------------------------------------------------------------------------------------- |
| **Show Non-Default Indicators** | Client | Enabled | Mark settings that are not set to their default value with an indicator, and show the default value below them. |

:::info
The world/client scope icons described above are always shown and are not
configurable.
:::
