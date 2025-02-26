# Developer Guide

Convenient Effects adds some functions that developers can utilize.

## API

The entirety of the API is located and documented in this file: [effect-interface.ts](https://github.com/DFreds/dfreds-convenient-effects/blob/main/src/ts/effect-interface.ts).

It can be accessed via `game.dfreds.effectInterface`.

## Hooks

Convenient Effects currently provides the following hooks:

- 'dfreds-convenient-effects.ready' - Called when Convenient Effects is done initializing everything.

## Data Flags

Convenient Effects utilizes some of its own flags on `ActiveEffect` objects. These can be useful to know if creating your own effects with the API. They are all located at `activeEffect.flags['dfreds-convenient-effects']?.['{flagName}']` or via `activeEffect.getFlag('dfreds-convenient-effects', '{flagName}')`.

You can also view any of these in the Convenient Config for effects.

- `ceEffectId` - string - The internal convenient effect identifier of the effect. It is automatically set to `ce-${effect.name.slugify()}`
- `isBackup` - boolean - Indicator that the effect in question is a backup effect
- `isConvenient` - boolean - Indicator that the effect or folder in question is one from the Convenient Effects module
- `isTemporary` - boolean - Indicator that the effect in question will display as a temporary effect. Typically, an effect is only indicated as temporary if it has a duration or a `statusId`
- `isDynamic` - boolean - Indicator that some data on the effect will dynamically change. This shouldn't really be used by another dev as it applies to specific effects and is handled internally.
- `isViewable` - boolean - Indicator that determines if the effect or folder should be shown in the app
- `nestedEffectsIds` - string[] - List of nested effect IDs (`ceEffectId`) that will be used to prompt the user for an answer.
- `subEffectsIds` - object[] - List of sub-effect IDs (`ceEffectId`) that will be applied as a dependency of the effect
- `otherEffectsIds` - object[] - List of other effect IDs (`ceEffectId`) that will be applied but not as a dependency of the effect
- `folderColor` - string - The color used to display the folder in the app