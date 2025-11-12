---
sidebar_position: 1
tags:
  - developer
  - library
---

# Lib: Migrations

<img src="https://img.shields.io/badge/Free-00aa00?style=for-the-badge"/>
<img src="https://img.shields.io/badge/Any%20System-00aaaa?style=for-the-badge"/>
<a target="_blank" href="https://foundryvtt.com/packages/lib-dfreds-migrations"><img src="https://img.shields.io/badge/Download-2e2e2e?style=for-the-badge"/></a>
<br />
<a target="_blank" href="https://github.com/DFreds/lib-dfreds-migrations"><img src="https://img.shields.io/github/v/release/DFreds/lib-dfreds-migrations?style=for-the-badge&label=Version"/></a>
<img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2FDFreds%2Flib-dfreds-migrations%2Freleases%2Flatest%2Fdownload%2Fmodule.json&query=%24.compatibility.verified&style=for-the-badge&logo=foundryvirtualtabletop&label=Foundry%20Version&color=%23fe6a1f"/>
<br/>
<br/>

A FoundryVTT module library that adds easy ways to extend the base Foundry UI.

## Features

- Easily define migrations with a comprehensive API
- Fully typed library included in repository for Typescript projects

## Usage

To use this in your own module, you can do any of the following:

- Use the `migrations.setup` hook (which fires based on Foundry's `setup` hook) and register your module and migrations on the provided instance of `migrations`
- Use the `migrations.ready` hook (which fires based on Foundry's `ready` hook) to run your migrations
- Use the `window.migrations` (accessible as just `migrations` in console and code) and register, add migrations, and run them wherever it makes sense. 

:::info
Everything will be ready to migrate when the Foundry `ready` hook is complete. However, you can run them whenever you want using the global `migrations` instance.
:::

:::warning
You cannot register your module or any migrations in the Foundry `init` hook.
:::

## Hooks

Lib: DFreds Migrations provides a few hooks.

- `migrations.setup` - This is called once on Foundry's `setup` hook. It should be used to register your module and migrations using the provided instance of `migrations`.
- `migrations.ready` - This is called once on Foundry's `ready` hook. At this point, migrations can be run (you must call this yourself).

## API Methods

Currently, these are the supported API methods: https://github.com/DFreds/lib-dfreds-migrations/blob/main/types/migrations/index.d.ts

## Sample

A sample setup can be found here: https://github.com/DFreds/lib-dfreds-migrations/blob/main/src/ts/sample.ts
