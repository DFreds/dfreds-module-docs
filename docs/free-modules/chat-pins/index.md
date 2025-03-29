---
sidebar_position: 1
tags:
  - free
  - module
---

# Chat Pins

<img src="https://img.shields.io/badge/Free-00aa00?style=for-the-badge"/>
<img src="https://img.shields.io/badge/Any%20System-00aaaa?style=for-the-badge"/>
<a target="_blank" href="https://foundryvtt.com/packages/dfreds-chat-pins"><img src="https://img.shields.io/badge/Download-2e2e2e?style=for-the-badge"/></a>
<br />
<a target="_blank" href="https://github.com/DFreds/dfreds-chat-pins"><img src="https://img.shields.io/github/v/release/DFreds/dfreds-chat-pins?style=for-the-badge&label=Version"/></a>
<img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2FDFreds%2Fdfreds-chat-pins%2Freleases%2Flatest%2Fdownload%2Fmodule.json&query=%24.compatibility.verified&style=for-the-badge&logo=foundryvirtualtabletop&label=Foundry%20Version&color=%23fe6a1f"/>
<a target="_blank" href="https://forge-vtt.com/bazaar#package=dfreds-chat-pins"><img src="https://img.shields.io/badge/dynamic/json?label=Installs&query=package.installs&suffix=%25&url=https://forge-vtt.com/api/bazaar/package/dfreds-chat-pins&colorB=68a74f&style=for-the-badge"/></a>
<br/>
<br/>

A module that allows pinning messages to the chat.

## Overview

Chat Pins enhances Foundry VTT's chat functionality by allowing you to save and
organize important messages for future reference. Rather than scrolling through
chat history or losing messages when clearing chat, you can now pin critical
information, rolls, or conversations with a simple right-click.

The module adds a dedicated Chat Pin Log that serves as a curated collection of
your pinned messages, accessible via a pin icon above the chat box. From this
log, you can easily manage your pins and quickly jump back to the original
message context in the main chat. When you clear the chat log, your pinned
messages remain preserved, ensuring you never lose important information.

![Chat Pins](./img/chat-pins.png)

## Features

- Easily pin or unpin any message by right-clicking it
- View an entirely separate chat log of all the pinned messages by pressing the button above the message box
- Jump to the location of the pin in the main chat log by right-clicking it in the pinned chat log
- When flushing the entire chat log, all pinned messages will remain

## Configuration

Settings are provided to configure the module.

![Settings](./img/settings.png)

## Required Modules

- [libWrapper](https://foundryvtt.com/packages/lib-wrapper) by ruipin - A
  library that wraps core Foundry methods to make it easier for module
  developers to add functionality. Note that if you for some reason don't want
  to install this, a shim will be used instead.