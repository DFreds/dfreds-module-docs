---
sidebar_position: 2
tags:
  - premium
  - module
---

# Clipboard

<img src="https://img.shields.io/badge/Premium-aa0000?style=for-the-badge"/>
<img src="https://img.shields.io/badge/Any%20System-00aaaa?style=for-the-badge"/>
<a target="_blank" href="https://foundryvtt.com/packages/dfreds-clipboard"><img src="https://img.shields.io/badge/Download-2e2e2e?style=for-the-badge"/></a>
<br />
<img src="https://img.shields.io/badge/Version-v1.0.2-007ec6?style=for-the-badge&labelColor=555555" />
<img src="https://img.shields.io/badge/13-fe6a1f?style=for-the-badge&logo=foundryvirtualtabletop&label=Foundry%20Version" />
<a target="_blank" href="https://forge-vtt.com/bazaar#package=dfreds-clipboard"><img src="https://img.shields.io/badge/dynamic/json?label=Installs&query=package.installs&suffix=%25&url=https://forge-vtt.com/api/bazaar/package/dfreds-clipboard&colorB=68a74f&style=for-the-badge"/></a>
<br/>
<br/>

A FoundryVTT module that adds a clipboard application to the game that keeps track of the items you copied.

## Overview

Clipboard enhances Foundry VTT's copy and paste functionality by providing a
persistent clipboard that maintains a history of copied items across scenes.
Whether you're duplicating tokens, templates, tiles, or any other placeable
objects, this module eliminates the frustration of having to repeatedly copy
the same items when working between scenes.

The module adds a dedicated clipboard interface accessible from each layer,
allowing you to view and manage your copied items. You can paste individual
items or entire groups with ease, and your clipboard history persists
throughout your gaming session, making scene setup and management more
efficient than ever.

## Features

- Adds a clipboard button to each layer (tokens, tiles, walls, etc.) that opens a convenient clipboard interface
- Maintains a history of copied items for each layer, making it easy to paste previously copied items individually or all at once
- Remembers copied items between scenes, so you can copy from one scene and paste into another
- Customize how many items are stored in the clipboard history through module settings

## Showcase

### Tokens

![Clipboard Tokens](./img/clipboard-tokens.png)

### Templates

![Clipboard Templates](./img/clipboard-templates.png)

### Tiles

![Clipboard Tiles](./img/clipboard-tiles.png)

### Drawings

![Clipboard Drawings](./img/clipboard-drawings.png)

### Walls

![Clipboard Walls](./img/clipboard-walls.png)

### Lights

![Clipboard Lights](./img/clipboard-lights.png)

### Sounds

![Clipboard Sounds](./img/clipboard-sounds.png)

### Notes

![Clipboard Notes](./img/clipboard-notes.png)

## Configuration

Settings are provided to configure the module.

![Settings](./img/settings.png)

## Keybindings

You can toggle the clipboard application with `Ctrl+Shift+C` by default.

## Required Modules

- [libWrapper](https://foundryvtt.com/packages/lib-wrapper) by ruipin - A
  library that wraps core Foundry methods to make it easier for module
  developers to add functionality. Note that if you for some reason don't want
  to install this, a shim will be used instead.
- [Lib: DFreds UI Extender](https://foundryvtt.com/packages/lib-dfreds-ui-extender) by DFreds - A library that makes it easy to add new UI elements to Foundry
