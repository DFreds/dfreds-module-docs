---
sidebar_position: 1
tags:
  - premium
  - module
---

# DFreds AI Helper

<img src="https://img.shields.io/badge/Premium-aa0000?style=for-the-badge"/>
<a target="_blank" href="https://www.patreon.com/dfreds"><img src="https://img.shields.io/badge/Early%20Access-9b59b6?style=for-the-badge"/></a>
<img src="https://img.shields.io/badge/Any%20System-00aaaa?style=for-the-badge"/>
<a target="_blank" href="https://www.patreon.com/dfreds/shop/dfreds-ai-helper-v1-0-0-1085429"><img src="https://img.shields.io/badge/Download-2e2e2e?style=for-the-badge"/></a>
<br/>
<br/>

A FoundryVTT module that uses AI to help in your game.

## Features

- Chat with an AI that remembers your conversations using the Foundry built-in chat messages
- Ask one-off questions about anything related to your system
- Use AI in text editors to summarize or rewrite selected text
- Use AI in text editors to create new documents by providing a prompt

## Let Me Sell You This

Ever get a creative block? Don't like how you wrote a biography, or want it summarized? Use the power of AI!

## What This Module Does

This module adds some chat commands to talk to an AI. It also adds some new editor buttons to manipulate any selected text.

Chat with an AI that remembers your conversation:

![Chat](./img/chat.png)

Ask it a one-off questions:

![Ask](./img/ask.png)

Use it directly in text editors:

![Text](./img/text-editors.png)

You can configure some stuff:

![Settings](./img/settings.png)

## Generating API Keys

For the time being, the only AI supported is Gemini. Others will be added later.

### Gemini

To generate an API key for Gemini, go to this link after logging in:
https://aistudio.google.com/apikey

You'll then need to copy and paste that API key into the settings of the module.

Note that Gemini is free for the moment.

## Required Modules

- [Chat Commander](https://foundryvtt.com/packages/_chatcommands) by DJ Addi - A
library that allows easy creation of new chat commands. It also has the benefits
of displaying all default, available commands when typing `/` in chat!
