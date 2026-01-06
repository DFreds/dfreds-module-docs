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

- Automatically hides any effect icons that do originate from an actor or item
the user owns 
- Easily configure when icons appear based on the level of
ownership (limited, observer, owner)
- Overlay icons always appear

## Configuration

Settings are provided to configure the module.

![Settings](./img/settings.png)

## Required Modules

- [libWrapper](https://foundryvtt.com/packages/lib-wrapper) by ruipin - A
  library that wraps core Foundry methods to make it easier for module
  developers to add functionality. Note that if you for some reason don't want
  to install this, a shim will be used instead.