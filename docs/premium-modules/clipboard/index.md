---
sidebar_position: 2
tags:
  - premium
  - module
---

# Clipboard

<img src="https://img.shields.io/badge/Premium-aa0000?style=for-the-badge"/>
<a target="_blank" href="https://www.patreon.com/dfreds"><img src="https://img.shields.io/badge/Early%20Access-9b59b6?style=for-the-badge"/></a>
<img src="https://img.shields.io/badge/Any%20System-00aaaa?style=for-the-badge"/>
<a target="_blank" href="https://www.patreon.com/dfreds/shop/dfreds-clipboard-v1-0-0-1159963"><img src="https://img.shields.io/badge/Download-2e2e2e?style=for-the-badge"/></a>
<br/>
<br/>

A FoundryVTT module that adds a clipboard application to the game that keeps track of the items you copied.

## Features

- Adds a clipboard button to each layer (tokens, tiles, walls, etc.) that opens a convenient clipboard interface
- Maintains a history of copied items for each layer, making it easy to paste previously copied items individually or all at once
- Remembers copied items between scenes, so you can copy from one scene and paste into another
- Customize how many items are stored in the clipboard history through module settings

## Let Me Sell You This

Ever need to copy several items from one scene to the next? Hate how you have to
re-copy the same items over and over again? Well, this module is for you!

## What This Module Does

This module adds a clipboard application to the game that keeps track of all
placeable items that have been copied for the current session.

Copied tokens:

![Clipboard Tokens](./img/clipboard-tokens.png)

Copied templates:

![Clipboard Templates](./img/clipboard-templates.png)

Copied tiles:

![Clipboard Tiles](./img/clipboard-tiles.png)

Copied drawings:

![Clipboard Drawings](./img/clipboard-drawings.png)

Copied walls:

![Clipboard Walls](./img/clipboard-walls.png)

Copied lights:

![Clipboard Lights](./img/clipboard-lights.png)

Copied sounds:

![Clipboard Sounds](./img/clipboard-sounds.png)

Copied notes:

![Clipboard Notes](./img/clipboard-notes.png)

You can configure some stuff:

![Settings](./img/settings.png)

## Keybindings

You can toggle the clipboard application with `Ctrl+Shift+C` by default.

## Required Modules

- [libWrapper](https://foundryvtt.com/packages/lib-wrapper) by ruipin - A
  library that wraps core Foundry methods to make it easier for module
  developers to add functionality. Note that if you for some reason don't want
  to install this, a shim will be used instead.
- [Lib: DFreds UI Extender](https://foundryvtt.com/packages/lib-dfreds-ui-extender) by DFreds (that's me) - A library that makes it easy to add new UI elements to Foundry
