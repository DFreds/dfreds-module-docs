---
sidebar_position: 1
tags:
  - developer
  - library
---

# Lib: DFreds UI Extender

<img src="https://img.shields.io/badge/Free-00aa00?style=for-the-badge"/>
<img src="https://img.shields.io/badge/Any%20System-00aaaa?style=for-the-badge"/>
<a target="_blank" href="https://foundryvtt.com/packages/lib-dfreds-ui-extender"><img src="https://img.shields.io/badge/Download-2e2e2e?style=for-the-badge"/></a>
<br />
<a target="_blank" href="https://github.com/DFreds/lib-dfreds-ui-extender"><img src="https://img.shields.io/github/v/release/DFreds/lib-dfreds-ui-extender?style=for-the-badge&label=Version"/></a>
<img src="https://img.shields.io/badge/dynamic/json.svg?url=https://raw.githubusercontent.com/DFreds/lib-dfreds-ui-extender/main/static/module.json&label=FVTT&query=$.compatibility.verified&colorB=fe6a1f&style=for-the-badge"/>
<a target="_blank" href="https://forge-vtt.com/bazaar#package=lib-dfreds-ui-extender"><img src="https://img.shields.io/badge/dynamic/json?label=Installs&query=package.installs&suffix=%25&url=https://forge-vtt.com/api/bazaar/package/lib-dfreds-ui-extender&colorB=68a74f&style=for-the-badge"/></a>
<br/>
<br/>

A FoundryVTT module library that adds easy ways to extend the base Foundry UI.

## Features

- Easily add new scene controls to any layer controls (token, tiles, drawings, walls, etc.)
- Easily add new HUD controls to tokens, tiles, or drawings

## Usage

To use this in your own module, you can do any of the following:

- Use the `uiExtender.init` hook (which fires based on Foundry's `init` hook) and register your UI elements on the provided instance of `uiExtender`
- Use the `window.UiExtender` (accessible as just `UiExtender` in console and code) and register in Foundry's init method.

:::info
Everything will be ready to render when the Foundry `setup` hook is complete.
:::

## Hooks

Lib: DFreds UI Extender provides a few hooks.

- `uiExtender.init` - This is called once on Foundry's `init` hook. It should be used to register your controls using the provided instance of `uiExtender`.
- `uiExtender.setup` - This is called once on Foundry's `setup` hook. At this point, all controls will be created and available when they render.

## API Methods

Currently, these are the supported API methods:

### Register Scene Control

A scene control is a button that is located on a specific layer. Under the hood, this uses the `getSceneControlButtons` hook.

![Scene Control](./img/scene-control.png)

```js
registerSceneControl(input: SceneControlInput)
```

The data objects are described below:

```ts
interface SceneControlInput {
    /**
     * The ID of the module registering
     *
     */
    moduleId: string;

    /**
     * The name of the control layer
     */
    name:
        | "token"
        | "measure"
        | "tiles"
        | "drawings"
        | "walls"
        | "lighting"
        | "sounds"
        | "regions"
        | "notes";

    /**
     * The position to put the button. If no number is given, it will append it to the end
     */
    position?: number;

    /**
     * The predicate to determine if the control should be visible
     *
     * @param data The data for the controls
     * @returns true if the control should be added, false otherwise
     */
    predicate?: (data: any) => boolean;

    /**
     * The tool data
     */
    tool: SceneControlTool;
}

interface SceneControlTool {
    /**
     * The name of the tool. This is used to identify the tool in the scene
     * control tools.
     */
    name: string;

    /**
     * The title of the tool that display on hover.
     */
    title: string;

    /**
     * The icon used for the tool. This is the icon class from Font Awesome.
     */
    icon: string;

    /**
     * Determines if the tool is visible in the scene control tools. Note that
     * it might be better to use the predicate function instead, based on when
     * the tool is registered.
     */
    visible: boolean;

    /**
     * Determines if the tool should be toggleable. If true, the tool will render as on/off rather than selected/deselected.
     */
    toggle?: boolean;

    /**
     * Determines if the tool is active or not
     */
    active?: boolean;

    /**
     * Determines if the tool should render as a button. If false, the tool will
     * remain active after clicking.
     */
    button?: boolean;

    /**
     * The click handler
     */
    onClick?: () => void;

    /**
     * Configuration for rendering the tool's toolclip.
     */
    toolclip?: ToolclipConfiguration;
}

interface ToolclipConfiguration {
    /**
     * The filename of the toolclip video.
     */
    src: string;

    /**
     * The heading string.
     */
    heading: string;

    /**
     * The items in the toolclip body.
     */
    items: ToolclipConfigurationItem[];
}

interface ToolclipConfigurationItem {
    /**
     * A plain paragraph of content for this item.
     */
    paragraph?: string;

    /**
     * A heading for the item.
     */
    heading?: string;

    /**
     * Content for the item.
     */
    content?: string;

    /**
     * If the item is a single key reference, use this instead of content.
     */
    reference?: string;
}
```

An example:

```js
export function mySampleModule() {
  Hooks.once("uiExtender.init", (uiExtender) => {
    uiExtender.registerSceneControl({
      moduleId: "my-module-id",
      name: "token",
      position: 2,
      tool: {
        name: "testing-button",
        title: "DFreds Test Button",
        icon: "fas fa-robot",
        button: true,
        visible: true,
        onClick: () => {
          ui.notifications.info("You clicked me!")
        }
      }
    })
  })
}
```

### Register HUD Button

A HUD button is a button located located on a specific item on the canvas when you right click. Under the hood, this uses the `render${type}HUD` hook.

![HUD Button](./img/hud-button.png)

```js
registerHudButton(input: HudButtonInput)
```

The data objects are described below:

```ts
interface HudButtonInput {
    /**
     * The ID of the module registering
     */
    moduleId: string;

    /**
     * The type of HUD to use
     */
    hudType: "token" | "tile" | "drawing";

    /**
     * The tooltip when hovering on the HUD button
     */
    tooltip: string;

    /**
     * The name of action when clicking the button
     */
    action?: string;

    /**
     * The HTML that will be used in the button
     */
    icon: string;

    /**
     * The location of the button
     */
    location: "div.left" | "div.right";

    /**
     * The predicate to determine if the button should be added
     *
     * @param data The data for the item with the HUD
     * @returns true if the button should be added, false otherwise
     */
    predicate?: (data: any) => boolean;

    /**
     * The click handler
     *
     * @param event The click event
     * @param data The data for the item with the HUD
     */
    onClick?: (event: JQuery.ClickEvent, data: any) => void;

    /**
     * The right-click handler
     *
     * @param event The context menu event
     * @param data The data for the item with the HUD
     */
    onRightClick?: (event: JQuery.ContextMenuEvent, data: any) => void;
}
```

Some examples:

```js
export function mySampleModule() {
  Hooks.once("uiExtender.init", (uiExtender) => {
    uiExtender.registerHudButton({
      moduleId: "my-module-id",
      hudType: "token",
      tooltip: "New Token Button",
      icon: `<i class="fas fa-image fa-fw"></i>`,
      location: "div.left",
      onClick: (_event, token) => {
        console.log("Clicked!")
      },
      onRightClick: (_event, token) => {
        console.log("Right clicked!")
      }
    })

    uiExtender.registerHudButton({
      moduleId: "my-module-id",
      hudType: "tile",
      tooltip: "New Tile Button",
      icon: `<i class="fas fa-image fa-fw"></i>`,
      location: "div.right",
      onClick: (_event, tile) => {
        console.log("Clicked!")
      },
      onRightClick: (_event, tile) => {
        console.log("Right clicked!")
      }
    })

    uiExtender.registerHudButton({
      moduleId: "my-module-id",
      hudType: "drawing",
      tooltip: "Say Hi",
      icon: `<i class="fas fa-robot fa-fw"></i>`,
      location: "div.right",
      onClick: (_event, drawing) => {
        ui.notifications.info(`Hello from drawing ${drawing.fillColor}`)
      }
    })
  })
}
```

## Handlebar Helpers

A few handlebar helpers have also been registered to make common use cases easier.

### Compare

This will help in conditionally rendering some HTML depending on two values and the operator provided.

Operators include:

- `==`
- `===`
- `!=`
- `!==`
- `<`
- `>`
- `<=`
- `>=`
- `typeof`

```hbs
{{#compare myDataString.length ">" "the string I want"}}
    <p>myDataString is longer than the string I want!</p>
{{else}}
    <p>myDataString is equal to or shorter than the string I want!</p>
{{/compare}}
```

```hbs
{{#compare "Test" "Test"}}
    Default comparison of "==="
{{/compare}}
```

### Is GM

This will help in conditionally rendering some HTML depending on if the user is a GM or not.

```hbs
{{#if (isGm)}}
    <button class="view-backups">
        <i class="fas fa-arrow-rotate-left"></i>
        My GM Button
    </button>
{{/if}}
```

### Strip HTML

This will remove any HTML elements from a provided string.

```hbs
<h4><a title="{{stripHtml myHtmlString}}">Some link</a></h4>
```
