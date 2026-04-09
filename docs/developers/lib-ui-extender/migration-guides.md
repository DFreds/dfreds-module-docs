---
sidebar_position: 1
---

# Migration Guides

When Foundry updates major versions, certain migrations may be unavoidable when
continuing to use Lib: DFreds UI Extender.

:::tip
All up-to-date types are defined in the repository [here](https://github.com/DFreds/lib-dfreds-ui-extender/blob/main/types/uiExtender/index.d.ts).
:::

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