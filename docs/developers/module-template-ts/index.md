---
sidebar_position: 2
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

## Features

- Full use of well-defined types provided by [pf2e](https://foundryvtt.com/packages/pf2e)
- Symlink integration, so you aren't directly messing with the foundry data folder
- Use of [nvm](https://github.com/nvm-sh/nvm) and npm for node and package management
- Use of [vite](https://vite.dev/) for building
- Commands to build for production, staging, or development
- Commands to configure and run different versions of FoundryVTT
- Tools to automatically rename the name of the module, update the types, and enforce code linting
- Powerful GitHub actions that handle releases and (optionally) posting updates to a Discord channel

## Getting Started

1. Ensure you have the pf2e repo cloned from github (`git clone git@github.com:foundryvtt/pf2e.git`)
1. Use the template button on Github to create a new repo. Make sure that the "Repository name" is the same name as the identifier of your new module. This is important since the folder name NEEDS to match the identifier when the module is linked to Foundry
    - Example:
        - Owner: DFreds
        - Repository name: `dfreds-new-cool-module`
1. Clone the repo OUTSIDE of the Foundry data path
1. Copy `foundryconfig.example.json` to `foundryconfig.json`
1. Within `foundryconfig.json`, update the `dataPath`, `pf2e`, and `fvtt` paths
    - Example:
        - ```json
            {
                "dataPath": "C:\\Users\\DFreds\\AppData\\Local\\FoundryVTT\\Data",
                "pf2eRepoPath": "C:\\src\\foundry-modules\\pf2e",
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
1. Run `npm ci`
    - Installs all dependencies according to the `package-lock.json`
1. Run `npm run rename-module`
    - Replaces all occurrences of `dfreds-module-template-ts` and `DFreds Module Template TS` in the project with your desired module identifier and name
1. Run `npm run update-types`
    - Copies all pf2e types to the `/types` folder using the pf2e path set in `foundryconfig.json`
1. Run `npm run lint:fix`
    - Fixes and formats all the types you just copied from pf2e. Recommend doing this after every type update to reduce diffs
1. Run `npm run build`
    - Builds the app into the `/dist` folder
1. Run `npm run link`
    - Symlinks the built `/dist` folder to your Foundry data path set in `foundryconfig.json`
1. If you want to use the publish to discord action, then be sure to add a repository secret called `DISCORD_WEBHOOK_URL` that points to your configured webhook. You should also update the content and release username if applicable.
    - To point to role IDs, use `"<@&{role_id}>"` in the content.

:::warning
If you don't plan on using any 3rd party dependencies, then be sure to remove `vendor.mjs` from the `module.json` file.
    - Note that the UUID dependency was included to get started. It's likely you don't need this specific dependency, but the module won't build without at least one dependency if the references to `vendor.mjs` exists in the project.
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

### `npm run update-types && npm run lint:fix`

Updates the pf2e types and auto-fixes any linting issues to reduce the diff in Git. It's recommended to run this periodically.

:::warning
Since this is dependent on an external integration, types may be slow to update
or inaccurate, especially when a new version of Foundry releases. You can always
change the types yourself in `types/foundry`.
:::

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
