---
sidebar_position: 6
tags:
  - free
  - module
---

# Hidden Token Effects 

<img src="https://img.shields.io/badge/Free-00aa00?style=for-the-badge"/>
<img src="https://img.shields.io/badge/Any%20System-00aaaa?style=for-the-badge"/>
<a target="_blank" href="https://foundryvtt.com/packages/dfreds-hidden-token-effects"><img src="https://img.shields.io/badge/Download-2e2e2e?style=for-the-badge"/></a>
<br />
<a target="_blank" href="https://github.com/DFreds/dfreds-hidden-token-effects"><img src="https://img.shields.io/github/v/release/DFreds/dfreds-hidden-token-effects?style=for-the-badge&label=Version"/></a>
<img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2FDFreds%2Fdfreds-hidden-token-effects%2Freleases%2Flatest%2Fdownload%2Fmodule.json&query=%24.compatibility.verified&style=for-the-badge&logo=foundryvirtualtabletop&label=Foundry%20Version&color=%23fe6a1f"/>
<br/>
<br/>

A FoundryVTT module that hides effect icons on tokens.

## Overview

Hidden Token Effects offers control over what effects appear to your players on other tokens.

![Hidden Token Effects](./img/hidden-token-effects.png)

## Features

- Automatically hides any effect icons that do not originate from an actor or
item the user owns
- Easily configure when icons appear based on the level of ownership (limited,
observer, owner)
- Overlay icons always appear

## Settings

| Setting              | Default | Description                                                |
| -------------------- | ------- | ---------------------------------------------------------- |
| **Permission Level** | Owner   | The ownership level a user needs to see a token's effects. |

**Permission Level** accepts:

- **Disabled** - turn the hiding off, so every effect icon is visible to everyone
- **None** - no ownership required, so every effect icon is visible
- **Limited** - limited ownership or higher
- **Observer** - observer ownership or higher
- **Owner** - only users who own the effect's actor or item

:::info
This is a world setting, so only a Game Master can change it and it applies to
everyone. Changing it redraws the effects on every token immediately, with no
reload required.
:::

:::note
Overlay effects are exempt from this setting and are always drawn, whatever the
permission level.
:::

## Required Modules

- [libWrapper](https://foundryvtt.com/packages/lib-wrapper) by ruipin - A
  library that wraps core Foundry methods to make it easier for module
  developers to add functionality. Note that if you for some reason don't want
  to install this, a shim will be used instead.