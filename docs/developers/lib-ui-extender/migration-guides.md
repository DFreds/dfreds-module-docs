---
sidebar_position: 1
---

# Migration Guides

When Foundry updates major versions, certain migrations may be unavoidable when
continuing to use Lib: DFreds UI Extender.

:::tip
All up-to-date types are defined in the repository [here](https://github.com/DFreds/lib-dfreds-ui-extender/blob/main/types/uiExtender/index.d.ts).
:::

## New in UI Extender v2.4.0

Nothing was removed or changed. Directories gained two new positioning options.

- `DirectoryInput.before`
  - Insert the directory directly above the directory with the given ID
- `DirectoryInput.after`
  - Insert the directory directly below the directory with the given ID

Both take precedence over `order`, which continues to work exactly as before, and
`before` wins if both are provided. An ID that does not exist falls through to
the next option.

Prefer these over `order` when the position depends on another directory.
`order` is a positional index resolved after every other module's directory has
already been inserted, so the index you would need to pass changes depending on
which other modules are enabled.

## Version 13 to Version 14 - Starts with UI Extender v2.3.0

Nothing was removed or changed that previously existed. However, there are new
parameters available for both directories and scene control tools.

- `DirectoryInput.gmOnly`
  - When true, the directory will only be rendered for GM users
- `SceneControlToolInput`
  - Foundry v14 includes some additional parameters to control tools, indicated below
    - `interaction?: boolean;`
      - Indicates this tool allows interaction with placeables
    - `control?: boolean;`
      - Indicates this tool allows placeables to be controlled
    - `creation?: boolean;`
      - Indicates this tool allows placeables to be created
    - `createData?: object;`
      - Provides the default creation data
    - `shapeData?: object;`
      - Provides the data of the shape the tool creates

## Version 12 to Version 13 - Starts with UI Extender v2.0.0

The main change from Foundry version 12 to 13 is the change to scene control data.

- `SceneControlInput.name`
  - `"token"` has been changed to `"tokens"`
  - `"measure"` has been changed to `"templates"`
- `SceneControlInput.position`
  - This is no longer defined, and has been replaced with `SceneInputControl.tool.order`
- `SceneControlInput.onClick`
  - Changed to `onChange` which provides the event and active status of the control