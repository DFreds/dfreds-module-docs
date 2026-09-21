---
sidebar_position: 1
---

# User Guide

Triggers are created and edited from **Configure Triggers** in the module
settings. Each one is built on three tabs: the event to watch for, the filters
that narrow it down, and the actions to run.

![Configure Triggers](./img/triggers-config.png)

## Events

An event decides what the trigger watches for.

![Event Tab](./img/trigger-config-event.png)

| Group          | Events                                                              |
| -------------- | ------------------------------------------------------------------- |
| Documents      | Document property changes; document is created, updated, or deleted |
| Statuses       | Status is applied or removed                                        |
| Active Effects | Active effect is applied, updated, or removed                       |
| Combat         | Combat starts or ends, round changes, turn starts or ends           |
| Tokens         | Token moves, token is targeted                                      |
| World          | World time changes, game is paused, user connects                   |
| D&D 5e         | See [Events and Actions for Your System](#events-and-actions-for-your-system) |

:::info
**Document is updated** fires on _any_ change to a document. **Document
property changes** fires only when the property you name is part of an update,
and lets conditions see what that property held before the change.
:::

## Filters

Filters decide whether a trigger that heard its event should actually run.

![Filters Tab](./img/trigger-config-filters.png)

**Applies To** narrows by document. Leave it on any document, drag in specific
documents, or pick document types.

**Conditions** compare a property against a value. Paths are read from the
document the event is about. For instance, `system.attributes.hp.value` reads the HP of the actor on
an actor event. Start a path with a context name to read from something else:

- `actor.type`
- `effect.name`
- `previous.system.attributes.hp.value`

Values can be plain text or numbers, an expression such as
`@system.attributes.hp.max / 2`, or a regular expression with the pattern
operator. Dice are not rolled here, only in actions.

**Restrictions** limit a trigger to combat, to certain scenes, or to a
percentage chance. An event that is not about a scene counts as happening on
the **active** scene, not the one you have open.

:::tip
The context prefix is how you stop a trigger reacting to its own changes. An
effect trigger that pins down the effect name will ignore any effect it applies
itself.
:::

## Actions

Actions run in order from top to bottom and can be reordered by dragging. If one
of them fails, the rest are skipped, which is covered under
[Execution](#execution).

![Actions Tab](./img/trigger-config-actions.png)

| Group            | Actions                                                                                                                                              |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Effects          | Apply effect, remove effect, toggle status                                                                                                           |
| Documents        | Add an item or effect, remove an item or effect, change a property, adjust a number, delete the document, set a flag                                 |
| Chat             | Send chat message, roll on a table, roll a formula                                                                                                   |
| Combat           | Create a combat encounter, start combat, end combat, add or remove from combat, advance to the next turn, advance to the next round, roll initiative |
| Audio and Visual | Play a sound, show a notification, pan to the token, hide or reveal the token, set the token's light, show an image, start or stop a playlist        |
| Flow             | Wait, enable or disable another trigger, run another trigger, target the token, advance world time, pause the game                                   |
| Advanced         | Run a macro, run a script                                                                                                                            |
| Debug            | Show what the event gives you                                                                                                                        |
| D&D 5e           | See [Events and Actions for Your System](#events-and-actions-for-your-system) |

Each action card shows what that action does under its title.

Every action works on whatever the event was about unless you fill in **Act
On**, which points that one action at a fixed document instead. Chat messages
and notifications accept `{{actor.name}}` style substitution using any of the
names listed on the Event tab.

**Change a property** and **adjust a number** can both roll dice. Type `2d6` to
write a rolled amount, or `-1d4` to take one away. Anything starting with `@` is
read from the target, such as `-@system.details.level`, and the two can be mixed
in one value.

The five actions that happen on a player's own screen - play a sound, show a
notification, pan to the token, show an image, and target the token - also pick
an audience. Note that a gamemaster owns every actor, so **Owners** reaches them
on everyone's turn. **Player Owners** is the one that leaves them out.

### Sharing One List of Actions

**Run another trigger** runs a second trigger's on whatever set the first one
off. Its event, its conditions, and its on or off switch are all skipped, so a
trigger written only to be run this way can be left switched off and still do
its job.

This is how several triggers share one list of actions: put the actions in a
trigger of their own, point each of the others at it, and editing that one list
changes what all of them do.

### Finding Out What Went Wrong

**Show what the event gives you** writes every name the event carries, and the
value it holds, to the browser console. Add it to a trigger, set the trigger
off, and open the console (F12 or Ctrl+Shift+I or Cmd+Shift+I) to see the
provided values. It is the easiest way to work out why a condition or a message
is not reading what you expected.

### What a Macro or Script Receives

**Run a macro** and **run a script** both get the trigger context handed to
them: a macro as named arguments, a script as variables already in scope. You
never have to unpack anything.

| Name                  | What it is                                                               |
| --------------------- | ------------------------------------------------------------------------ |
| `document`            | What the event was about.                                                |
| `actor`               | The actor involved.                                                      |
| `token`               | The token **drawn on the canvas**. See the warning below.                |
| `tokenDocument`       | The token's document, wherever it is placed. Use this to read its data.  |
| `item`, `effect`      | The item or active effect involved.                                      |
| `combat`, `combatant` | The combat and combatant involved.                                       |
| `region`, `scene`     | The region and scene involved.                                           |
| `user`                | The user whose action set the trigger off.                               |
| `changed`, `previous` | The update data, and the values from before it. `{}` when not an update. |
| `statusId`            | The status involved, for status events.                                  |
| `event`               | The id of the event that fired.                                          |
| `trigger`             | The trigger itself, including its name and id.                           |
| `speaker`             | A speaker object, ready to hand to `ChatMessage.create`.                 |
| `depth`               | How many triggers deep this one is. Counted for you.                     |

Every name is always defined, so you never get a reference error. The ones the
event does not provide are `null` instead, and the Event tab lists which names a
given event fills in.

:::warning
`token` is the token as drawn on the canvas, not its document. Triggers run on
the gamemaster's client, so `token` is `null` whenever that gamemaster is not
looking at the scene the token is on. In plain terms, a script that works while
you watch a fight will stop working the moment you switch scenes. Read data off
`tokenDocument`, which is there for any actor with a token placed on a scene no
matter which scene is open, and keep `token` for things that only make sense on
screen.
:::

## Events and Actions for Your System

Some events and actions only make sense in one game system, so they only show up
when you are playing it. In a D&D 5e world the event and action pickers each
gain a **D&D 5e** group. In any other system that group is not there at all, and
nothing else about the module changes.

Every D&D 5e event is about an actor, so **Applies To** offers actor types for
all of them. Set it to characters only, or to one creature, the same way you
would for any actor event.

### D&D 5e Events

| Event                        | Fires when                                                                        |
| ---------------------------- | --------------------------------------------------------------------------------- |
| Actor takes damage           | An actor loses hit points, however the damage was dealt                           |
| Actor is healed              | An actor regains hit points, however the healing was done                         |
| Actor finishes a rest        | A rest is finished and everything it restores has been applied                    |
| Actor rolls a death save     | A death saving throw has been rolled and the result marked on the actor           |
| Actor stops concentrating    | An actor stops concentrating on a spell, for any reason                           |
| Actor uses something         | An item is used, a spell is cast, or any other action posts a card to chat        |
| Actor rolls an attack        | An attack is rolled, with the option to fire only on a critical hit or miss       |
| Actor rolls a check or save  | An ability check, skill check, tool check, saving throw, or initiative is rolled  |

**Actor takes damage** and **Actor is healed** both report how big the change
was, so a condition reads `changed.total` as a plain number either way. Both
also take a minimum amount, which is the quickest way to write "took a real hit"
rather than reacting to every point of chip damage.

**Actor rolls a death save** can be narrowed to a success, a failure, a natural
one, a natural twenty, the third success, or the third failure. One save can be
several of these at once, and each option matches all of them: a natural one is
also a failure, and it is a death as well if it was the one that finished the
actor off.

:::info
A natural one on a death save costs two failures rather than one, which is how
it is recognised. An actor who already had two failures marked cannot go past
three, so a natural one there looks the same as an ordinary failure. That save
is a death, so match on **the third failure** to catch it.
:::

**Actor stops concentrating** carries the spell that ended as the effect, so a
trigger can act on which one it was. It can be narrowed to the spell running out
on its own, or to something ending it early.

**Actor uses something** can be narrowed to a kind of use, such as only saves or
only attacks, and to a kind of item, such as only spells.

**Actor rolls a check or save** covers ability checks, skill checks, tool checks,
saving throws and initiative, and can be narrowed to one of those, or to a
single ability or skill. Death saves and concentration saves are left to the
events that are about those, which say far more about what happened.

The events built on a chat card put what the card said in `changed`, so a
condition or a chat message can use it:

| Event                       | What is in `changed`                                                     |
| --------------------------- | ------------------------------------------------------------------------ |
| Actor finishes a rest       | `restType`                                                               |
| Actor uses something        | `activityType`. The item used is available as `item`                    |
| Actor rolls an attack       | `total`, `critical`, `fumble`                                            |
| Actor rolls a check or save | `kind`, `ability`, `skill`, `tool`, `total`, `critical`, `fumble`        |

For example, a condition of `changed.total` at least `20` on **Actor rolls a
check or save** fires only on a high result, and `{{changed.total}}` puts the
result in a chat message.

:::info
**Actor rolls an attack** cannot tell you whether the attack hit. That depends on
the target's armor class, which is not part of the roll. It can tell a critical
hit and a critical miss apart, because the die alone decides those.
:::

:::info
The system does not record **why** concentration ended. A spell running out can
be told apart because its duration has run down, but a failed save, casting
something else, and ending it by hand all look the same, so they are grouped
together as ended early.
:::

### D&D 5e Actions

| Action               | What it does                                                                        |
| -------------------- | ----------------------------------------------------------------------------------- |
| Apply damage         | Deals damage, taking resistance, immunity and temporary hit points into account      |
| Apply healing        | Restores hit points, or grants temporary hit points                                  |
| Take a rest          | Puts an actor through a short or long rest, or asks the player to take one          |
| Roll a check or save | Rolls a check, save, death save, or concentration save and posts the result to chat  |
| Use an item          | Uses an item, casts a spell, or takes a feature                                      |
| Change exhaustion    | Raises or lowers exhaustion, keeping the condition on the sheet in step              |
| Stop concentrating   | Ends concentration, and with it whatever the actor was holding                    |

**Apply damage** and **apply healing** are worth using instead of **adjust a
number** on hit points. Writing hit points directly skips resistance, immunity,
damage thresholds and temporary hit points, while these two go through the
system and get all of it right. Both accept dice, so `2d6` rolls, and both
accept `{{changed.total}}` to reuse an amount from the event.

**Use an item** either points at one exact item or names one. A named item is
looked up on whichever actor the trigger is acting on, so a single trigger
covers every monster that has a Multiattack.

**Take a rest** can rest the actor right away or ask the player. Resting right
away recovers anything that comes back on that rest, but spends no hit dice,
because nobody is there to choose how many. Asking the player posts the
system's own rest card; they click it to open the normal rest window and spend
hit dice themselves. The player does not need to be online for the card to be
posted, and can click it later.

:::info
If you open a world in a different system, triggers you built with these are
left alone rather than thrown away. The event or action shows as unavailable and
is skipped, and everything you set up comes back when you return to D&D 5e.
:::

## Execution

Foundry hooks fire on every connected client, but triggers only run on the
gamemaster's, which is what stops a trigger firing once per connected player.
Notifications and sounds are then passed along to the players who should get
them. Macros and scripts run with gamemaster permissions, and scripts need the
Use Script Macros permission.

:::warning
Triggers do not fire when no gamemaster is logged in. The module warns you about
this on load if the world has triggers configured.
:::

Actions run one at a time, from the top of the list down, and each one finishes
before the next starts. If an action fails, the trigger stops there and the
actions below it do not run. This is by design, as an action further down the
list can count on one above it having executing successfully. A script that
cannot find what it is looking for, or an action pointed at something that has
since been deleted, will end the run.

The Log tab records how many actions ran before the trigger stopped, along with
the error, so a run that ends early is easy to tell apart from one that finished.

## Recursion

An action that changes a document can cause events that fire other triggers.
Every change a trigger makes is stamped with how deep in a chain it is, and the
chain stops at the configured maximum depth. Raise **Maximum Trigger Depth** if
you are chaining triggers on purpose. If you are not, hitting the limit usually
means a trigger is reacting to its own changes, and a condition that pins down
what it should match is the fix.

## Examples

The module ships with examples covering every event and action, in sets.
**Load Examples** at the bottom of the configuration window asks which sets you
want: Basic and Complex to begin with, plus a D&D 5e set that is only offered
while you are playing D&D 5e. They arrive switched off so you can turn them on
one at a time. Loading a set again refreshes it in place rather than making
duplicates, and leaves your own triggers alone.

See [Examples](./examples) for what each one does.

## Sharing Triggers

**Export** at the bottom of the configuration window writes every trigger in the
world to a file. **Import** reads one back and asks how it should arrive:

- **Add** keeps the triggers you already have and puts the imported ones after
  them.
- **Replace All** deletes every trigger in the world first.

Either way, an imported trigger takes the place of one you already have with the
same id. That is what lets you export a set of triggers, change them elsewhere,
and import them again to update them rather than end up with two of each.

## Logging

The Log tab records each trigger run for the current session, including what
fired it, what it acted on, how many actions ran, and any error. It clears on
reload.

When a trigger is not firing and it is not clear why, turn on **Verbose
Logging**. The browser console then names the filter that rejected each trigger.

## Settings

| Setting                   | Scope  | Default  | Description                                                                             |
| ------------------------- | ------ | -------- | --------------------------------------------------------------------------------------- |
| **Maximum Trigger Depth** | World  | 3        | How many times a trigger may cause another trigger to fire before the chain is stopped. |
| **Verbose Logging**       | Client | Disabled | Write extra detail to the browser console when triggers are evaluated.                  |

Alongside them is one config menu:

| Menu                   | Description                                     |
| ---------------------- | ----------------------------------------------- |
| **Configure Triggers** | Create and edit triggers, and view the run log. |

If you have [Lib: DFreds UI
Extender](https://foundryvtt.com/packages/lib-dfreds-ui-extender) installed,
**Configure Triggers** also appears as a button in the Settings sidebar, under
the **Module Settings** heading. It opens the same window, and only Game
Masters can see it.
