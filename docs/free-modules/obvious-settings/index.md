---
sidebar_position: 6
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
<img src="https://img.shields.io/badge/dynamic/json.svg?url=https://raw.githubusercontent.com/DFreds/dfreds-obvious-settings/main/static/module.json&label=FVTT&query=$.compatibility.verified&colorB=fe6a1f&style=for-the-badge"/>
<a target="_blank" href="https://forge-vtt.com/bazaar#package=dfreds-obvious-settings"><img src="https://img.shields.io/badge/dynamic/json?label=Installs&query=package.installs&suffix=%25&url=https://forge-vtt.com/api/bazaar/package/dfreds-obvious-settings&colorB=68a74f&style=for-the-badge"/></a>
<br/>
<br/>

A FoundryVTT module that makes the settings configuration more obvious in various ways.

## Overview

Obvious Settings enhances Foundry VTT's settings interface by providing clear
visual indicators that help users understand the scope and state of each
configuration option. When managing settings across a game, it can be
challenging to distinguish between settings that affect all players versus those
that only impact individual users. This module addresses that confusion by
adding intuitive icons that instantly communicate a setting's scope.

The module places a globe icon before "world" settings that apply globally to all
players, and a user icon before "client" settings that are personal to each user.
Additionally, it provides visual indicators when settings have been modified
from their default values, making it easy to track which configurations have
been customized.

![Obvious Settings](./img/showcase.png)

## Features

- Displays what settings are client based or world based
- Shows when a setting is not set to its default value

## Configuration

Settings are provided to configure the module.

![Settings](./img/settings.png)
