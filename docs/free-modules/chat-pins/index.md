---
sidebar_position: 1
tags:
  - free
  - module
---

# DFreds Chat Pins

A module that allows pinning messages to the chat.

Foundry page: https://foundryvtt.com/packages/dfreds-chat-pins

<details>
    <summary>Metadata</summary>
    <a href="https://github.com/DFreds/dfreds-chat-pins/pulse"><img src="https://img.shields.io/github/last-commit/DFreds/dfreds-chat-pins?style=for-the-badge&logo=github&color=7dc4e4&logoColor=D9E0EE&labelColor=302D41"/></a>
    <a href="https://github.com/DFreds/dfreds-chat-pins/releases/latest"><img src="https://img.shields.io/github/v/release/DFreds/dfreds-chat-pins?style=for-the-badge&logo=gitbook&color=8bd5ca&logoColor=D9E0EE&labelColor=302D41"/></a>
    <a href="https://github.com/DFreds/dfreds-chat-pins/stargazers"><img src="https://img.shields.io/github/stars/DFreds/dfreds-chat-pins?style=for-the-badge&logo=apachespark&color=eed49f&logoColor=D9E0EE&labelColor=302D41"/></a>
    <br/>
    <br/>
    <img src="https://img.shields.io/badge/dynamic/json.svg?url=https://raw.githubusercontent.com/DFreds/dfreds-chat-pins/main/static/module.json&label=Foundry%20Version&query=$.compatibility.verified&colorB=fe6a1f&style=for-the-badge&logo=foundryvirtualtabletop"/>
    <a href="https://forge-vtt.com/bazaar#package=dfreds-chat-pins"><img src="https://img.shields.io/badge/dynamic/json?label=Forge%20Installs&query=package.installs&suffix=%25&url=https://forge-vtt.com/api/bazaar/package/dfreds-chat-pins&colorB=68a74f&style=for-the-badge&logo=condaforge"/></a>
    <br/>
    <img src="https://img.shields.io/github/downloads/DFreds/dfreds-chat-pins/latest/dfreds-chat-pins.zip?color=2b82fc&label=LATEST%20DOWNLOADS&style=for-the-badge"/>
    <img src="https://img.shields.io/github/downloads/DFreds/dfreds-chat-pins/total?color=2b82fc&label=TOTAL%20DOWNLOADS&style=for-the-badge"/>
</details>

## Let Me Sell You This

Have you ever wanted to save a specific message, but delete all those other
crappy ones? What if you want to refer to it later? That sounds like a lot of
scrolling. Lame.

## What This Module Does

This module allows you to right-click any message in the chat log and pin or
unpin it. This stops Foundry from deleting it when you flush the chat log.

Additionally, you can refer to any of the pinned messages using the handy Chat
Pin Log application by clicking the pin icon above the chat text box.
Right-clicking any of the pinned chats in this chat log will provide an
additional option to jump to it in the main chat log.

![Chat Pins](./chat-pins.png)

## Required Modules

- [libWrapper](https://foundryvtt.com/packages/lib-wrapper) by ruipin - A
  library that wraps core Foundry methods to make it easier for module
  developers to add functionality. Note that if you for some reason don't want
  to install this, a shim will be used instead.