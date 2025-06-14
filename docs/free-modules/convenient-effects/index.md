---
sidebar_position: 2
tags:
  - free
  - module
---

# Convenient Effects

<img src="https://img.shields.io/badge/Free-00aa00?style=for-the-badge"/>
<img src="https://img.shields.io/badge/Any%20System-00aaaa?style=for-the-badge"/>
<a target="_blank" href="https://foundryvtt.com/packages/dfreds-convenient-effects"><img src="https://img.shields.io/badge/Download-2e2e2e?style=for-the-badge"/></a>
<br />
<a target="_blank" href="https://github.com/DFreds/dfreds-convenient-effects"><img src="https://img.shields.io/github/v/release/DFreds/dfreds-convenient-effects?style=for-the-badge&label=Version"/></a>
<img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2FDFreds%2Fdfreds-convenient-effects%2Freleases%2Flatest%2Fdownload%2Fmodule.json&query=%24.compatibility.verified&style=for-the-badge&logo=foundryvirtualtabletop&label=Foundry%20Version&color=%23fe6a1f"/>
<br/>
<br/>

A module that allows creation of easy-to-use toggleable active effects.

Currently, the DND5e and SW5e systems come with pre-created effects, but any
system can create their own effects.

## Overview 

Managing effects in tabletop roleplaying games can be complex and
time-consuming. Game masters often need to track multiple simultaneous effects,
from spell durations to status conditions, all while keeping the game running
smoothly.

This module simplifies effect management through an intuitive interface that's
accessible right from your token controls. With just a few clicks, you can
apply, remove, and track effects without disrupting the flow of your game.

For DND5e and SW5e systems, the module comes pre-configured with dozens of
commonly used effects, making it ready to use out of the box. The effects are
designed to work seamlessly with popular modules like Midi-QoL and DAE,
providing automatic tracking of effect durations, conditions, and their
interactions.

## Features

- Adds a new application to the token scene controls
- Provides a repository to create and share easy-to-use toggleable active effects
- Includes dozens of pre-built effects for the DND5e and SW5e systems
- First-class support for popular modules, such as Midi-QoL, Times Up, DAE, Active Token Lighting, and Token Magic FX
- Extensive API for use in macros

## Quick Start

1. Open the application with the button on the sidebar directory
1. Select a token and click an effect to toggle it on or off

![Convenient Effects App](./img/convenient-effects-app.png)

## Advanced Usage

If you are a regular user, see the [User Guide](./user-guide) for more details
on all the features provided.

If you are a developer or want to learn how to write macros using the API, check
out the [Developer Guide](./developer-guide).

## Required Modules

- [libWrapper](https://foundryvtt.com/packages/lib-wrapper) by ruipin - A
  library that wraps core Foundry methods to make it easier for module
  developers to add functionality. Note that if you for some reason don't want
  to install this, a shim will be used instead.
- [socketlib](https://foundryvtt.com/packages/socketlib) by Stäbchenfisch - A
  library that makes it easy to do difficult things with sockets
- [Lib: DFreds UI Extender](https://foundryvtt.com/packages/lib-dfreds-ui-extender) by DFreds - A library that makes it easy to add new UI elements to Foundry

## Helpful Modules

While not strictly required, the functionalities provided by these modules
drastically improve the usage of the various effects included in this module.

- [Times Up](https://foundryvtt.com/packages/times-up) by tim posney - Deletes
effects when their time is up or after a certain number of rounds or turns
- [DAE](https://foundryvtt.com/packages/dae) by tim posney - With midi-qol,
handles various additional expiration effects such as after 1 attack or when an
enemy is attacked
- [Midi-QOL](https://foundryvtt.com/packages/midi-qol) by tim posney - Handles a
vast amount of automation relating to advantage and disadvantage
- [Active Token Lighting](https://foundryvtt.com/packages/ATL) by kaelad -
Certain effects and spells can emit light, and this module allows active effects
to do that
- [Token Magic FX](https://foundryvtt.com/packages/tokenmagic) by SecretFire -
Certain effects and spells can have an effect applied, and this module allows
active effects to do that. Note that this requires DAE active as well.