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
<img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2FDFreds%2Fdfreds-droppables%2Freleases%2Flatest%2Fdownload%2Fmodule.json&query=%24.compatibility.verified&style=for-the-badge&logo=foundryvirtualtabletop&label=Foundry%20Version&color=%23fe6a1f"/>
<br/>
<br/>

A module which allows you to drag and drop an entire folder of tokens or journal entries onto the canvas, upload files for tokens, tiles, sounds, or notes, and drop files directly onto sidebar directories to instantly create the matching documents.

## Overview

Droppables adds powerful drag-and-drop shortcuts to Foundry VTT. Drop entire
folders of actors or journal entries onto the canvas at once, drop files onto the
canvas to create tokens, tiles, sounds, or notes based on the active layer, or
drop files onto a sidebar directory to instantly create the matching document -
including importing exported `.json` files.

## Features

- Easily drop entire folders of actors onto the canvas in a stack, line, or randomly
- Easily drop folders of notes onto the canvas
- Drop a file onto the canvas to upload it and automatically create a document based on the active layer:
  - **Token layer** - dropped images as new actors and tokens, prompting for the subtype
  - **Tile layer** - dropped images or videos as tiles
  - **Sound layer** - dropped audio files as ambient sounds
  - **Notes layer** - dropped images, PDFs, videos, or text files as a journal entry pinned to the canvas
- Drop images directly from browsers to automatically set the images for tokens, tiles, or notes
- Drag and drop documents directly from their sheet onto any supported area
- Drop a file onto a sidebar directory to upload it and automatically create a document of that type with the file assigned:
  - **Actors** and **Items** - dropped images, prompting for the subtype
  - **Scenes** - dropped images as the scene background
  - **Journal** - dropped images, PDFs, videos, or text files as journal entry pages
  - **Playlists** - dropped audio files as playlist sounds
  - **Roll Tables**, **Cards**, and **Macros** - dropped images
- Drop an exported `.json` file onto its sidebar directory to import it as a new document

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

### Drag/Drop Document Link
![Drag Drop Document Link](./img/drag-drop-document-link.gif)

## Required Modules

- [libWrapper](https://foundryvtt.com/packages/lib-wrapper) by ruipin - A
  library that wraps core Foundry methods to make it easier for module
  developers to add functionality. Note that if you for some reason don't want
  to install this, a shim will be used instead.
