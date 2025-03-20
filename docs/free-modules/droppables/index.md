---
sidebar_position: 3
tags:
  - free
  - module
---

# Droppables

<img src="https://img.shields.io/badge/Free-00aa00?style=for-the-badge"/>
<img src="https://img.shields.io/badge/Any%20System-00aaaa?style=for-the-badge"/>
<a target="_blank" href="https://foundryvtt.com/packages/dfreds-droppables"><img src="https://img.shields.io/badge/Download-2e2e2e?style=for-the-badge"/></a>
<br />
<a target="_blank" href="https://github.com/DFreds/dfreds-droppables"><img src="https://img.shields.io/github/v/release/DFreds/dfreds-droppables?style=for-the-badge&label=Version"/></a>
<img src="https://img.shields.io/badge/dynamic/json.svg?url=https://raw.githubusercontent.com/DFreds/dfreds-droppables/main/static/module.json&label=FVTT&query=$.compatibility.verified&colorB=fe6a1f&style=for-the-badge"/>
<a target="_blank" href="https://forge-vtt.com/bazaar#package=dfreds-droppables"><img src="https://img.shields.io/badge/dynamic/json?label=Installs&query=package.installs&suffix=%25&url=https://forge-vtt.com/api/bazaar/package/dfreds-droppables&colorB=68a74f&style=for-the-badge"/></a>
<br/>
<br/>

A module which allows you to drag and drop an entire folder of tokens or journal entries onto the canvas as well as uploading files for tokens, tiles, sounds, or notes.

## Overview

Droppables streamlines the process of adding content to your Foundry VTT scenes
by enabling powerful drag-and-drop functionality. Instead of placing tokens and
assets one by one, you can now drop entire folders of actors or journal entries
onto your canvas in a single action. The module automatically creates and
positions tokens or notes for each item in the folder, saving valuable
preparation time.

Additionally, Droppables revolutionizes how you import external files into
Foundry. Simply drag files directly onto your canvas, and based on the currently
selected layer, the module will automatically create the appropriate game
elements - whether that's new actors with tokens, tiles, ambient sounds, or
journal entries. This eliminates the traditional multi-step process of uploading
files and then creating game elements separately.

## Features

- Easily drop entire folders of actors onto the canvas in a stack, line, or randomly
- Easily drop folders of notes onto the canvas
- Drop various files onto the canvas to automatically upload them to your world
and create tokens, tiles, sounds, or notes

## Configuration

Settings are provided to configure the module.

![Settings](./img/settings.png)

## Examples

### Folder Dropping
![Dropping Actors](./img/droppables.gif)
![Dropping Journals](./img/droppables2.gif)

### File Dropping on Token Layer
![Dropping Tokens](./img/droppable-tokens.gif)

### File Dropping on Tiles Layer  
![Dropping Tiles](./img/droppable-tiles.gif)

### File Dropping on Sounds Layer
![Dropping Sounds](./img/droppable-sounds.gif)

### File Dropping on Notes Layer
![Dropping Notes](./img/droppable-notes.gif)

## Required Modules

- [libWrapper](https://foundryvtt.com/packages/lib-wrapper) by ruipin - A
  library that wraps core Foundry methods to make it easier for module
  developers to add functionality. Note that if you for some reason don't want
  to install this, a shim will be used instead.