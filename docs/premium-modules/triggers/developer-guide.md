---
sidebar_position: 3
---

# Developer Guide

Triggers exposes an API for macro writers and for modules that want to add their
own events and actions.

```js
const api = game.modules.get("dfreds-triggers").api;
```

## Reading and Running Triggers

```js
// Every stored trigger, in the order they appear in the list
const triggers = api.getTriggers();

// A single trigger by its id, shown on the Advanced tab
const trigger = api.getTrigger("N1yQGDIzWNTsIZ5y");

// Run a trigger directly, skipping its event and filters
await api.runTrigger("N1yQGDIzWNTsIZ5y", actor);
```

`runTrigger` is the quickest way to test a trigger without setting up the
situation that would normally fire it. Pass the document the trigger should act
on, and optionally anything else it should know about:

```js
await api.runTrigger("N1yQGDIzWNTsIZ5y", actor, { token, combat });
```

Because filters are skipped, the trigger runs whether or not it would normally
match. That makes it useful for a button or a macro that should do the same
thing a trigger does.

:::info
`runTrigger` only does anything on the active gamemaster's client, the one that
runs every other trigger. Call it from a world script that every client runs and
the trigger still runs once, on that client. Call it as a player and nothing
happens, because the actions behind a trigger write to the world with
gamemaster permissions.
:::

Calling `runTrigger` from inside a trigger, from a script action for instance,
should pass on the `depth` that script was given, so the chain keeps counting
towards the maximum trigger depth setting:

```js
await api.runTrigger("N1yQGDIzWNTsIZ5y", actor, { depth: depth + 1 });
```

Without it the new run starts at zero, and two triggers calling each other never
reach the cap. A run that is already past the cap is refused and says so in the
console.

## Registering Actions

An action is something a trigger can do. Register it on the
`dfreds-triggers.setup` hook and it appears in the action picker alongside the
built in ones.

```js
Hooks.on("dfreds-triggers.setup", (api) => {
  api.registerAction({
    id: "my-module.shout",
    label: "MyModule.Actions.Shout.Label",
    description: "MyModule.Actions.Shout.Description",
    group: "chat",
    icon: "fa-solid fa-bullhorn",
    runsOn: "gm",

    schema: () => ({
      message: new foundry.data.fields.StringField({
        required: true,
        blank: false,
        initial: "",
        label: "MyModule.Actions.Shout.MessageLabel",
      }),
    }),

    summarize: (config) => config.message,

    execute: async (config, context) => {
      await ChatMessage.create({
        content: `${context.actor?.name}: ${config.message}`,
      });
    },
  });
});
```

| Property      | Description                                                                                  |
| ------------- | -------------------------------------------------------------------------------------------- |
| `id`          | Unique within the action registry. Namespace it with your module id.                         |
| `label`       | A localization key, shown in the action picker.                                              |
| `description` | A localization key for one sentence saying what the action does, shown under its title.      |
| `group`       | One of `effects`, `documents`, `chat`, `combat`, `audioVisual`, `flow`, `advanced`, `debug`. |
| `icon`        | A Font Awesome class.                                                                        |
| `runsOn`      | `gm` to run once on the gamemaster, `client` to forward it to players.                       |
| `schema`      | Builds the action's form. Must return fresh field instances on every call.                   |
| `summarize`   | What this copy of the action is set to do, shown on its chip in the trigger list.            |
| `execute`     | Does the work, with `config` holding whatever the user entered.                              |
| `isAvailable` | Optional. Return `false` to hide the action, for one that depends on the system in use.      |

The `schema` is the whole of the configuration UI. Anything you declare there is
a field the user can fill in, and it comes back to you in `config`.

:::info
`description` and `summarize` answer different questions. The description says
what the action is for and never changes, which is what the editor shows under
the title while the fields below it are being filled in. The summary says what
this particular copy is set to, and is what the trigger list shows when you hover
its chip.
:::

### Client Actions

An action with `runsOn: "client"` is forwarded to players and runs on their own
screens, which is what you want for anything visual or audible. Add
`resolveUsers` to decide who receives it.

```js
api.registerAction({
  id: "my-module.panToToken",
  label: "MyModule.Actions.PanToToken.Label",
  description: "MyModule.Actions.PanToToken.Description",
  group: "audioVisual",
  icon: "fa-solid fa-location-crosshairs",
  runsOn: "client",

  schema: () => ({
    duration: new foundry.data.fields.NumberField({
      required: true,
      nullable: false,
      integer: true,
      initial: 400,
    }),
  }),

  // Without this, the action runs on every active user
  resolveUsers: (config, context) =>
    game.users.filter(
      (user) =>
        user.active &&
        !user.isGM &&
        context.actor?.testUserPermission(user, "OWNER"),
    ),

  summarize: (config) => `${config.duration}ms`,

  execute: async (config, context) => {
    const placeable = context.token?.object;
    if (!placeable) return;

    await canvas.animatePan({
      x: placeable.center.x,
      y: placeable.center.y,
      duration: config.duration,
    });
  },
});
```

:::warning
Client actions cross the socket, so their context is rebuilt from uuids on the
receiving end. `actor`, `token`, `item`, `effect`, `combat`, `combatant`,
`region` and `scene` all survive that trip. `changed` and `previous` do too. A
document the receiving client cannot see is empty there, so an action that must
read one should be a `gm` action instead.
:::

:::info
Only an action marked `runsOn: "client"` can be asked to run across the socket,
and only when a gamemaster is the one asking. An action marked `runsOn: "gm"`
runs on the gamemaster's own client and nowhere else, so it can safely do things
a player is not allowed to do.
:::

## Registering Events

An event decides what triggers can listen for. `register` is called once, at
`ready`, and is where you wire whatever Foundry hooks you care about. Hand
`dispatch` a context whenever something happens.

```js
Hooks.on("dfreds-triggers.setup", (api) => {
  api.registerEvent({
    id: "my-module.tokenMoved",
    label: "MyModule.Events.TokenMoved.Label",
    hint: "MyModule.Events.TokenMoved.Hint",
    group: "MyModule.Events.Group",
    icon: "fa-solid fa-shoe-prints",

    // Constrains the target filter in the editor
    documentName: "Token",

    // Listed in the editor as the names templates and scripts can use
    contextKeys: ["token", "actor", "scene", "user"],

    register(dispatch) {
      Hooks.on("updateToken", (token, changed, options, userId) => {
        // Hooks fire everywhere, and only one client runs triggers
        if (!game.user.isActiveGM) return;
        if (!("x" in changed) && !("y" in changed)) return;

        dispatch(this.id, {
          event: this.id,
          document: token,
          actor: token.actor,
          token,
          scene: token.parent,
          user: game.users.get(userId) ?? game.user,
          depth: 0,
        });
      });
    },
  });
});
```

| Property       | Description                                                                          |
| -------------- | ------------------------------------------------------------------------------------ |
| `id`           | Unique within the event registry. Namespace it with your module id.                  |
| `label`        | A localization key, shown in the event picker.                                       |
| `hint`         | A localization key saying exactly when the event fires.                              |
| `group`        | A localization key used to group events in the picker.                               |
| `icon`         | A Font Awesome class.                                                                |
| `documentName` | The document type the target filter should offer. Declare a `documentName` field in your own `schema` instead if the user picks it. |
| `noDocument`   | Set when the event is not about a document at all, which hides the target filter.    |
| `contextKeys`  | The names this event fills in, listed for the user on the Event tab.                 |
| `register`     | Wires your Foundry hooks. Called once, at `ready`.                                   |
| `schema`       | Optional configuration fields for the event itself.                                  |
| `matches`      | Optional. Narrows a dispatched context using what the user entered in `schema`.      |
| `summarize`    | Optional. How the trigger list describes the event once it has been set up.          |
| `isAvailable`  | Optional. Return `false` to hide the event, for one that depends on the system in use. |

`contextKeys` is what the editor lists under **What This Event Gives You**, so it
should match what your context actually fills in. A name listed there but never
set reads as a promise the event does not keep.

:::tip
Foundry hooks fire on every connected client, and `dispatch` does nothing on the
clients that do not run triggers. Your hook still built a context to hand it,
though, so start the hook with `if (!game.user.isActiveGM) return;` and that work
never happens on a player's client. The built in events all do this.
:::

### The Event Context

The context you dispatch is what filters, conditions, and templates all read
from. `document` and `user` are required; fill in whichever relations your event
knows about and leave the rest.

| Key        | Description                                                                 |
| ---------- | --------------------------------------------------------------------------- |
| `event`    | The id of the event producing the context.                                  |
| `document` | What the event is about. Filters and conditions resolve against this.       |
| `user`     | The user whose action caused the event.                                     |
| `depth`    | How many trigger generations deep this is. Use `0` for a user driven event. |
| `actor`    | Makes `{{actor.name}}` and paths like `actor.type` resolve.                 |
| `token`    | Used for chat speakers and for anything that acts on a token.               |
| `item`     | The item involved, when there is one.                                       |
| `effect`   | The active effect involved, when there is one.                              |
| `combat`   | The combat involved, along with `combatant`.                                |
| `region`   | The region involved, when there is one.                                     |
| `scene`    | Used by the scene filter. Derived from the token when omitted.              |
| `changed`  | The update diff, for events that come from an update.                       |
| `previous` | Values from before the update, keyed by the same dot paths as `changed`.    |
| `statusId` | The status involved, for events about a status or condition.                |

Setting `changed` and `previous` is what makes the **dropped below** and **rose
above** operators work (`crossedBelow` and `crossedAbove` in stored trigger
data), since those compare the value before an update against the value after
it.

### Narrowing With Event Options

Add a `schema` to give your event its own configuration fields, and a `matches`
function to filter dispatched contexts using what the user entered. Doing it
here rather than in a condition keeps the option next to the event it belongs
to.

```js
api.registerEvent({
  id: "my-module.chatKeyword",
  label: "MyModule.Events.ChatKeyword.Label",
  group: "MyModule.Events.Group",
  icon: "fa-solid fa-comment-dots",
  documentName: "ChatMessage",
  contextKeys: ["document", "actor", "user"],

  schema: () => ({
    phrase: new foundry.data.fields.StringField({
      required: true,
      blank: true,
      initial: "",
      label: "MyModule.Events.ChatKeyword.PhraseLabel",
    }),
  }),

  matches(eventConfig, context) {
    const phrase = eventConfig.phrase ?? "";
    if (!phrase) return true;

    return context.document.content
      .toLowerCase()
      .includes(phrase.toLowerCase());
  },

  register(dispatch) {
    Hooks.on("createChatMessage", (message, options, userId) => {
      dispatch(this.id, {
        event: this.id,
        document: message,
        user: game.users.get(userId) ?? game.user,
        depth: 0,
      });
    });
  },
});
```

### Describing a Configured Event

The trigger list shows an event's label with its chosen options listed
underneath. That reads badly when an option is the subject of the label — "Chat
message contains a phrase" over a bare "fireball" says neither half on its own.
Add `summarize` to write that line yourself, and the options are not listed
separately:

```js
summarize: (eventConfig) =>
  eventConfig.phrase
    ? game.i18n.localize("MyModule.Events.ChatKeyword.Summary", {
        phrase: eventConfig.phrase,
      })
    : game.i18n.localize("MyModule.Events.ChatKeyword.Label"),
```

With `"Summary"` set to `Chat message contains "{phrase}"`, the card reads
`Chat message contains "fireball"`. Fall back to the plain label when the option
is blank, since a blank option usually means "any" and the label already says
that.

:::warning
Events and actions must be registered during `init` or on the
`dfreds-triggers.setup` hook. Anything registered after `ready` never gets
wired up, because the engine has already wired everything it knows about.
:::

:::tip
If a module that registered an action is later disabled, triggers using it are
left alone rather than invalidated. The action shows as unknown in the editor
and is skipped at runtime, and starts working again when the module comes back.
:::

## Hooks

Triggers provides the following hooks:

| Hook                         | Description                                                           |
| ---------------------------- | --------------------------------------------------------------------- |
| `dfreds-triggers.setup`      | Called during `setup` with the API. Register events and actions here. |
| `dfreds-triggers.logUpdated` | Called whenever the run log gains an entry or is cleared.             |

## Sample

Here is a fully built sample (written in Typescript) showcasing some of the
types of events and actions that can be registered.

```typescript
/**
 * A worked example of a module adding its own events and actions.
 *
 * This runs only in development builds, from `module.ts`. It is here so the
 * registration API is exercised by something real on every dev run, and so
 * there is a complete file to point other module authors at.
 *
 * Everything below is what a separate module would write. The only difference
 * is that a real module would use its own id and localization keys rather than
 * the literal strings used here for readability.
 */

const SAMPLE_MODULE_ID = "sample-module";

/*
 * Events
 * ------
 * An event decides what triggers can listen for. `register` is called once, at
 * ready, and is where you wire whatever Foundry hooks you care about. When
 * something happens, hand `dispatch` a context describing it.
 */

/**
 * Build the context an event hands to the engine.
 *
 * The engine reads filters and conditions off `document`, and everything else
 * is what makes `{{actor.name}}` and paths like `actor.type` resolve. Fill in
 * whichever relations your event actually knows about and leave the rest.
 */
function buildTokenContext(
  eventId: string,
  token: TokenDocument,
  userId: string,
): TriggerEventContext {
  return {
    event: eventId,
    document: token as unknown as Document,
    actor: token.actor,
    token,
    scene: token.parent as Scene | null,
    user: game.users.get(userId) ?? game.user,
    depth: 0,
  };
}

/** Fires whenever a token changes position. */
function registerTokenMovedEvent(api: TriggersApi): void {
  api.registerEvent({
    id: `${SAMPLE_MODULE_ID}.tokenMoved`,
    label: "Token is moved",
    hint: "Fires when a token's position changes, however the move was made.",
    group: "Sample Module",
    icon: "fa-solid fa-shoe-prints",

    // Constrains the target filter in the editor. Without it, the event has
    // to declare a documentName field of its own in `schema`.
    documentName: "Token",

    // Surfaced in the editor as the list of names templates and scripts can
    // use, so it should match what the context above actually fills in
    contextKeys: ["token", "actor", "scene", "user"],

    register(dispatch) {
      Hooks.on(
        "updateToken" as any,
        (
          token: TokenDocument,
          changed: Record<string, unknown>,
          _options: object,
          userId: string,
        ) => {
          if (!("x" in changed) && !("y" in changed)) return;

          dispatch(this.id, buildTokenContext(this.id, token, userId));
        },
      );
    },
  });
}

/**
 * Fires on a chat message containing a phrase.
 *
 * Shows the two optional pieces an event can add: a `schema`, which becomes
 * configuration fields on the Event tab, and `matches`, which narrows a
 * dispatched context using what the user entered there.
 */
function registerChatKeywordEvent(api: TriggersApi): void {
  api.registerEvent({
    id: `${SAMPLE_MODULE_ID}.chatKeyword`,
    label: "Chat message contains a phrase",
    hint: "Fires when a chat message is posted containing the configured phrase.",
    group: "Sample Module",
    icon: "fa-solid fa-comment-dots",
    documentName: "ChatMessage",
    contextKeys: ["document", "actor", "token", "user"],

    // Must return fresh field instances on every call, because the editor
    // builds a new form from this each time it renders
    schema: () => ({
      phrase: new foundry.data.fields.StringField({
        required: true,
        blank: true,
        initial: "",
        label: "Phrase",
        hint: "Only fire when the message contains this text. Leave blank for any message.",
      }),
    }),

    matches(eventConfig, context) {
      const phrase = (eventConfig.phrase as string) ?? "";
      if (!phrase) return true;

      const content =
        (context.document as unknown as ChatMessage).content ?? "";
      return content.toLowerCase().includes(phrase.toLowerCase());
    },

    register(dispatch) {
      Hooks.on(
        "createChatMessage" as any,
        (message: ChatMessage, _options: object, userId: string) => {
          const speaker = message.speaker;
          const scene = speaker?.scene ? game.scenes.get(speaker.scene) : null;
          const token = speaker?.token
            ? (scene?.tokens.get(speaker.token) ?? null)
            : null;

          dispatch(this.id, {
            event: this.id,
            document: message as unknown as Document,
            actor:
              token?.actor ??
              (speaker?.actor
                ? (game.actors.get(speaker.actor) ?? null)
                : null),
            token,
            scene,
            user: game.users.get(userId) ?? game.user,
            depth: 0,
          });
        },
      );
    },
  });
}

/*
 * Actions
 * -------
 * An action is a thing a trigger can do. `schema` builds its form, `summarize`
 * is the one line shown on the collapsed card, and `execute` does the work with
 * whatever the user entered.
 *
 * `runsOn` decides where that work happens. Prefer `gm`, which runs the action
 * once on the active gamemaster's client, unless it only makes sense on a
 * particular player's screen.
 */

/**
 * Briefly fades the token in and out. Runs on each listening player's own client.
 *
 * `client` actions are forwarded over the socket, so the context they receive
 * is rebuilt from uuids on the far side. Every document on the context survives
 * that trip, but anything the far side cannot look up by uuid does not.
 */
function registerBlinkTokenAction(api: TriggersApi): void {
  api.registerAction({
    id: `${SAMPLE_MODULE_ID}.blinkToken`,
    label: "Blink the token",
    description: "Fades the token in and out a few times.",
    group: "audioVisual",
    icon: "fa-solid fa-eye",
    runsOn: "client",

    schema: () => ({
      times: new foundry.data.fields.NumberField({
        required: true,
        nullable: false,
        integer: true,
        min: 1,
        max: 10,
        initial: 3,
        label: "Blinks",
      }),
      audience: new foundry.data.fields.StringField({
        required: true,
        blank: false,
        initial: "everyone",
        choices: {
          everyone: "Everyone",
          gms: "Gamemasters",
          playerOwners: "Player owners",
        },
        label: "Audience",
      }),
    }),

    // Decides which clients the action is forwarded to. Without this it
    // runs on every active user.
    resolveUsers(config, context) {
      const active = game.users.filter((user) => user.active);

      switch (config.audience) {
        case "gms":
          return active.filter((user) => user.isGM);
        case "playerOwners":
          return context.actor
            ? active.filter(
                (user) =>
                  !user.isGM &&
                  context.actor!.testUserPermission(user, "OWNER"),
              )
            : [];
        default:
          return active;
      }
    },

    summarize(config) {
      return `${(config.times as number) ?? 0} blink(s)`;
    },

    async execute(config, context) {
      // The placeable is the canvas object for the token, which only exists
      // on clients currently viewing that scene
      const placeable = (
        context.token as unknown as { object?: { alpha: number } }
      )?.object;
      if (!placeable) return;

      const original = placeable.alpha;
      const times = (config.times as number) ?? 3;

      for (let blink = 0; blink < times; blink += 1) {
        placeable.alpha = 0.2;
        await new Promise((resolve) => setTimeout(resolve, 120));
        placeable.alpha = original;
        await new Promise((resolve) => setTimeout(resolve, 120));
      }
    },
  });
}

/**
 * Register everything against the Triggers API.
 *
 * The `setup` hook is the safe place to do this. Events registered after
 * `ready` never get their hooks wired, because the engine has already wired
 * everything it knows about by then.
 */
function sampleApiUsage(): void {
  Hooks.on("dfreds-triggers.setup" as any, (api: TriggersApi) => {
    registerTokenMovedEvent(api);
    registerChatKeywordEvent(api);

    registerBlinkTokenAction(api);

    console.log(
      `${SAMPLE_MODULE_ID} | registered 2 sample events and 1 sample action`,
    );
  });
}
```
