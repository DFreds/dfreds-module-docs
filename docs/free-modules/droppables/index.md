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

A FoundryVTT module that allows you to drag and drop an entire folder of tokens or journal entries onto the canvas, upload files for tokens, tiles, sounds, or notes, and drop files directly onto sidebar directories to create the matching documents.

## Overview

Droppables extends what Foundry accepts on a drag and drop. A folder of actors
or journal entries can be dropped onto the canvas to place all of its contents
at once. A file dropped onto the canvas is uploaded and turned into a token,
tile, sound, or note depending on the active layer. A file dropped onto a
sidebar directory creates a document of that type with the file assigned, and an
exported `.json` file dropped the same way is imported.

## Features

- Easily drop entire folders of actors onto the canvas in a stack, line, or randomly
- Easily drop folders of notes onto the canvas
- Drop a file onto the canvas to upload it and automatically create a document based on the active layer:
  - **Token layer** - dropped images as new actors and tokens, prompting for the subtype
  - **Tile layer** - dropped images or videos as tiles
  - **Sound layer** - dropped audio files as ambient sounds
  - **Notes layer** - dropped images, PDFs, videos, or text files as a journal entry pinned to the canvas
- Drop images directly from browsers to automatically set the images for tokens, tiles, or notes
- Drop a file onto a sidebar directory to upload it and automatically create a document of that type with the file assigned:
  - **Actors** and **Items** - dropped images, prompting for the subtype
  - **Scenes** - dropped images as the scene background
  - **Journal** - dropped images, PDFs, videos, or text files as journal entry pages
  - **Playlists** - dropped audio files as playlist sounds
  - **Roll Tables**, **Cards**, and **Macros** - dropped images
- Drop an exported `.json` file onto its sidebar directory to import it as a new document

## Settings

| Setting                                | Scope  | Default  | Description                                                                                                                                    |
| -------------------------------------- | ------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **Drop Style**                         | Client | Dialog   | How the contents of a dropped folder are arranged on the canvas.                                                                               |
| **Enable Unlinked Actor Drop Handler** | Client | Disabled | Show a dialog asking how many tokens to drop when dropping an unlinked actor onto the canvas.                                                  |
| **Enable Canvas Drag/Upload**          | Client | Enabled  | Allow dragging and uploading tokens, tiles, audio, and journal entries onto the canvas based on the active layer.                              |
| **Enable Sidebar Drag/Upload**         | Client | Enabled  | Allow dropping files onto a sidebar directory to create a document of that type. Media is uploaded and assigned, `.json` exports are imported. |

**Drop Style** accepts:

- **Dialog** - prompt for one of the options below each time
- **Stack** - drop everything on the same spot
- **Random** - scatter across the canvas
- **Horizontal Line** - arrange left to right
- **Vertical Line** - arrange top to bottom

:::tip
Holding **Shift** while dropping an unlinked actor bypasses the
**Enable Unlinked Actor Drop Handler** dialog, whether or not the setting is on.
:::

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
