---
sidebar_position: 1
---

# Migration Guides

When Foundry updates major versions, certain migrations may be unavoidable when
continuing to use Lib: DFreds UI Extender.

:::tip
All up-to-date types are defined in the repository [here](https://github.com/DFreds/lib-dfreds-ui-extender/blob/main/types/uiExtender/index.d.ts).
:::

## Version 12 to Version 13

The main change from Foundry version 12 to 13 is the change to scene control data.

- `SceneControlInput.name`
  - `"token"` has been changed to `"tokens"`
  - `"measure"` has been changed to `"templates"`
- `SceneControlInput.position`
  - This is no longer defined, and has been replaced with `SceneInputControl.tool.order`
- `SceneControlInput.onClick`
  - Changed to `onChange` which provides the event and active status of the control