---
sidebar_position: 3
tags:
  - developer
  - template
---

# Module Template TS

<img src="https://img.shields.io/badge/Free-00aa00?style=for-the-badge"/>
<img src="https://img.shields.io/badge/Any%20System-00aaaa?style=for-the-badge"/>
<a target="_blank" href="https://github.com/DFreds/dfreds-module-template-ts"><img src="https://img.shields.io/badge/Use Template-2e2e2e?style=for-the-badge"/></a>
<br />
<a target="_blank" href="https://github.com/DFreds/dfreds-module-template-ts"><img src="https://img.shields.io/github/v/release/DFreds/dfreds-module-template-ts?style=for-the-badge&label=Version"/></a>
<img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2FDFreds%2Fdfreds-module-template-ts%2Freleases%2Flatest%2Fdownload%2Fmodule.json&query=%24.compatibility.verified&style=for-the-badge&logo=foundryvirtualtabletop&label=Foundry%20Version&color=%23fe6a1f"/>
<br/>
<br/>

A FoundryVTT module template that uses Typescript and Vite for development.

## Overview

Module Template TS is a GitHub template repository for starting a Foundry module
written in Typescript. It provides the build pipeline, type definitions,
linting, and release workflow up front, so a new module does not have to set
them up from scratch. Builds run through Vite, Foundry types come from an npm
package, and the module is symlinked into a Foundry data folder for development.

This is a template rather than an installable module. Create a repository from
it on GitHub and run the rename script to get started.

## Features

- Full use of well-defined Foundry types from [@dfreds/foundry-types](https://www.npmjs.com/package/@dfreds/foundry-types), installed like any other dependency
- Symlink integration, so you aren't directly messing with the foundry data folder
- Use of [nvm](https://github.com/nvm-sh/nvm) and npm for node and package management
- Use of [vite](https://vite.dev/) for building
- Commands to handle extracting and compiling Foundry compendium packs
- Commands to build for production, staging, or development
- Commands to configure and run different versions of FoundryVTT
- Tools to automatically rename the name of the module and enforce code linting
- Powerful GitHub actions that handle releases, (optionally) posting updates to
a Discord channel, and optionally publishing the release to Foundry

## Getting Started

1. Use the template button on Github to create a new repo. Make sure that the "Repository name" is the same name as the identifier of your new module. This is important since the folder name NEEDS to match the identifier when the module is linked to Foundry
    - Example:
        - Owner: DFreds
        - Repository name: `dfreds-new-cool-module`
1. Clone the repo OUTSIDE of the Foundry data path
1. Copy `foundryconfig.example.json` to `foundryconfig.json`
1. Within `foundryconfig.json`, update the `dataPath` and `fvtt` paths
    - Example:
        - ```json
            {
                "dataPath": "C:\\Users\\DFreds\\AppData\\Local\\FoundryVTT\\Data",
                "fvtt": {
                    "11": "C:\\src\\foundry-versions\\FoundryVTT-11.315",
                    "12": "C:\\src\\foundry-versions\\FoundryVTT-12.331",
                    "13": "C:\\src\\foundry-versions\\FoundryVTT-13.337"
                }
            }
          ```
1. If not already installed, download and install [nvm](https://github.com/nvm-sh/nvm).
1. Run `nvm use` or `nvm install <version>` and `nvm use`
    - Ensures a common node version is used regardless of user environment
    - Note: On Windows, `nvm use` will not automatically use the .nvmrc file. Do `nvm use $(cat .nvmrc)` or `nvm use $(Get-Content .nvmrc)`
1. Run `npm ci`
    - Installs all dependencies according to the `package-lock.json`
1. Run `npm run rename-module`
    - Replaces all occurrences of `dfreds-module-template-ts` and `DFreds Module Template TS` in the project with your desired module identifier and name
1. Run `npm run lint:fix`
    - Fixes and formats all files (except types). Optional step to maintain consistent styling.
1. Run `npm run build`
    - Builds the app into the `/dist` folder
1. Run `npm run link`
    - Symlinks the built `/dist` folder to your Foundry data path set in `foundryconfig.json`

:::warning
If you don't plan on using any 3rd party dependencies, then be sure to remove `vendor.mjs` from the `module.json` file, as well as any regular dependencies (non-dev dependencies) in `package.json`.
    - Note that the UUID dependency was included to get started. It's likely you don't need this specific dependency, but the module won't build without at least one dependency if the references to `vendor.mjs` exists in the project.
:::

## Optional Build Steps

The module template comes with a `publish.yml` workflow that can handle
publishing release notes to a Discord channel and automatically uploading the
release to Foundry.

If you **do not** wish to use this, simply delete the `publish.yml` file in
`./.github/workflows`.

You can also opt to use either one individually. Delete the corresponding one
you don't want in the `publish.yml` file.

### Publish to Discord

If you want to use the publish to discord action, then be sure to add a
repository secret called `DISCORD_WEBHOOK_URL` that points to your configured
webhook. You should also update the content and release username if applicable.
    - To point to role IDs, use `"<@&{role_id}>"` in the content.

### Publish to Foundry

If you want to use the publish to foundry action, then be sure to add a
repository secret called `PACKAGE_TOKEN`. This token can be found on the edit
page of your module, and is different per module.

:::warning
Unless you host the zip file yourself, you cannot use the publish to Foundry for
premium modules. Meaning, if Foundry is the one hosting your content (i.e.
https://r2.foundryvtt.com), you cannot use this.
:::

## Commands

All commands can be found in the `package.json` file. The main ones are described below.

### `npm run build`

Runs the module in "production" mode, which minifies the module and deletes the
lock file.

### `npm run stage`

Runs the module in "stage" mode, which minifies the module but does not delete
the lock file. Mostly useful to run before changing which module you're working
on.

### `npm run dev`

Runs the module in "development" mode, which allows you to debug typescript in
the console.

### `npm run watch`

Runs the module in "development" mode and hot reloads the files on change.

:::info
You still need to refresh Foundry to see the changes (Esc -> Reload)
:::

:::warning
At the moment, any changes to files in the `static` folder needs a full re-run
of this command. They will not be updated on save.
:::

### `npm run foundry`

Prompts you to start a node version of foundry that is configured in the
`foundryconfig.json` file. If configured correctly, you should be able to run
this command and go to `localhost:{configured-port}`. The configured port is
usually localhost:30000, but could be different depending on if you changed it.

## Foundry types

Foundry's own types come from the
[@dfreds/foundry-types](https://www.npmjs.com/package/@dfreds/foundry-types)
package, which `npm ci` installs along with everything else. There is nothing to
copy or update by hand.

The version number is the Foundry version it describes, so `14.365.0` is for
Foundry 14.365. To move to a newer Foundry release, change the version in
`package.json` and run `npm install`.

Two things in the template connect it up, and you should not need to touch
either:

- `tsconfig.json` points `@client/*` and `@common/*` at the installed package
- `src/ts/module.ts` starts with a line that loads the global names such as
  `game` and `Hooks`

:::warning
The definitions are maintained by hand, so a new Foundry release can arrive
before they catch up. If something is missing or wrong, add it to a `.d.ts` file
in your own module and TypeScript will merge it with what the package provides.
Reporting it on the
[package repository](https://github.com/DFreds/dfreds-foundry-types) gets it
fixed for everyone.
:::

### `npm run lint:fix`

Fixes any lint issues to reduce the diff in Git. It's recommended to run this
periodically or before each commit. Alternatively, you could install extensions
like ESLint, EditorConfig, Prettier, and Prettier ESLint in VSCode to do it on
save.

## Static Files

Assets, fonts, language files, packs, templates, and the module.json can all exist in the `/static` folder in anyway you see fit. When built, any static files or folders will exist in `/dist` directly.

## Updating Node

After updating to a new node version, run `node -v > .nvmrc`.

## Releasing a New Module Version

- Create a new tag with the format `major.minor.patch` or `vMajor.Minor.Patch`.
  - Example: `1.0.0` or `v1.0.0`
- Push the tag to origin
- Once the workflow completes, go to the Releases and observe the new draft release corresponding to the version
- Edit the draft release, make any desired changes, and then press Publish

## References

- https://foundryvtt.com/article/module-development/
- https://foundryvtt.wiki/en/development/guides/vite
- https://bringingfire.com/blog/intro-to-foundry-module-development
