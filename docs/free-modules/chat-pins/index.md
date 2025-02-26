---
sidebar_position: 1
---

# DFreds Chat Pins

A module that allows pinning messages to the chat.

## Description

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
