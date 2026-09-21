---
sidebar_position: 2
---

# Examples

The module ships with ready made triggers in sets. **Load Examples** at the
bottom of the configuration window asks which sets you want and adds them to
your world.

| Set     | What is in it                                                                |
| ------- | ---------------------------------------------------------------------------- |
| Basic   | One idea each, and the place to start                                        |
| Complex | Several steps at once, showing what triggers can be built up to              |
| D&D 5e  | Built on the D&D 5e events and actions, and only offered in a D&D 5e world   |

Basic and Complex are ticked to begin with. The D&D 5e set is there to tick as
well when you are playing D&D 5e, and is not offered at all in another system,
because its triggers are built on events that only exist there.

They arrive switched off so you can turn them on one at a time. Loading a set
again refreshes it in place rather than making duplicates, and leaves your own
triggers alone.

:::info
The examples are starting points, not a finished library. They are there to show
what each event, condition, and action can do so you can see the shape of a
trigger and then build your own. Copy one, change what it watches for, point it
at something else, and you have something that fits your table.
:::

Some examples need setting up before they do anything, because they want
something only you can provide, such as a sound file, a roll table, a macro, or
a specific actor. Those say so in the first line of their notes, and any action
that is waiting on you is switched off until you fill it in.

Some also assume the data layout of a particular game system. Hit points at
`system.attributes.hp.value` and actor types of `character` and `npc` are true of
dnd5e and pf2e, but not of every system. If an example never fires, the property
path is the first thing to check.

## Basic Examples

These cover one idea each, and between them they touch every event and action.

| Trigger                                        | What it does                                                                                                             |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Basic 1: Dead at 0 hit points                  | Marks a creature dead and announces it the moment its hit points cross to 0.                                             |
| Basic 2: Clear Dead when healed above 0        | Takes the Dead status back off once hit points rise above 0. The other half of the one above.                            |
| Basic 3: Bloodied at half hit points           | Announces a creature at half health, worked out from that creature's own maximum rather than a fixed number.             |
| Basic 4: React when a status is applied        | Posts a message when a status lands, and can apply an effect or add an item at the same time.                            |
| Basic 5: Clean up when a status is removed     | Removes an effect by name when the status that went with it is cleared.                                                  |
| Basic 6: React to one specific effect          | Posts a message when an effect with a particular name is applied. The example to study for how property paths work.      |
| Basic 7: React to an effect ending             | The same, for an effect going away, whether it was deleted by hand or ran out of time.                                   |
| Basic 8: An effect was suspended or resumed    | Catches an effect being switched off or back on, which is a change rather than a deletion.                               |
| Basic 9: Something on a document changed       | Reacts to any change at all, and reports the name both before and after it.                                              |
| Basic 10: Something was deleted                | Announces a deletion, reading from what the event carried since the document itself is gone.                             |
| Basic 11: A token takes to the air             | Fires when a token's elevation rises above zero. Works the same in every system.                                         |
| Basic 12: A token was dragged across the map   | Reacts to a drag longer than a set distance, and can pan everyone's camera to the token.                                 |
| Basic 13: A tripwire across the map            | Fires on the one move that carries a token across a fixed line on the map.                                               |
| Basic 14: Someone targeted a token             | Reports when a player targets a token, ignoring your own targeting.                                                      |
| Basic 15: An hour of rest restores a little health | Reacts to at least an hour passing on the world clock and heals a little.                                            |
| Basic 16: Announce when the game is paused     | Shows a notification on pause, and can stop or start a playlist with it.                                                 |
| Basic 17: Greet a player when they arrive      | Posts a greeting when someone connects, and can show them an image.                                                      |
| Basic 18: A monster dies dramatically          | Chains a sound, a pause, an announcement, a loot roll, and hiding the corpse.                                            |
| Basic 19: Tell a player it is their turn       | Notifies the players who own the creature and pans their camera to it.                                                   |
| Basic 20: End of turn upkeep                   | Fires at the end of a creature's turn, where end of turn saves or damage over time belong.                               |
| Basic 21: Something at the top of every round  | Posts a message each time the round changes.                                                                             |
| Basic 22: Turn another trigger on when combat starts | Switches a second trigger on when a fight begins, so it only runs where it belongs.                                |
| Basic 23: Put new arrivals into the fight      | A token dropped onto the scene during combat joins the encounter and rolls initiative on its own.                        |
| Basic 24: Tidy up when combat ends             | Deletes a named effect from each combatant once the encounter is over.                                                   |
| Basic 25: Only one specific creature           | Shows how to limit a trigger to a named actor or token.                                                                  |
| Basic 26: Occasional random flavour            | Posts a message on a percentage chance rather than every time.                                                           |
| Basic 27: Roll some dice when a fight starts   | Posts a real roll to chat, with a formula that can read from the creature it is about.                                   |
| Basic 28: Run your own code                    | The same trigger with both a script action and a macro action, to compare the two.                                       |
| Basic 29: See what an event gives you          | Writes everything the event carries to the browser console. The first thing to reach for when a trigger misbehaves.      |

## Complex Examples

These build on the basic set. Several of them work in pairs, and a few are
deliberately misbehaving so you can see what goes wrong and why.

| Trigger                                                  | What it does                                                                                                        |
| -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Complex 1: Several actions in order                      | Five actions where the order genuinely matters, and hit points clamped so they cannot go negative.                  |
| Complex 2: A trigger that runs once, then switches itself off | Fires once and then disables itself. The pattern for anything that should happen once per fight or per rest.    |
| Complex 3: How a runaway loop gets stopped               | Deliberately reacts to its own change so you can watch the maximum depth setting cut the chain off.                 |
| Complex 4: React to a whole family of statuses           | Leaves the status blank and uses a pattern instead, so one trigger covers restrained, restrain, and the rest.       |
| Complex 5: Comparing the value before and after          | Three conditions doing by hand what the dropped below operator does on its own, to show what it is really doing.    |
| Complex 6: Any one of several conditions                 | A tour of the text operators in Any mode, where one match is enough.                                                |
| Complex 7: React to an effect without reacting to yourself | An effect trigger that applies an effect, with the condition that stops it setting itself off.                    |
| Complex 8: Tell players and gamemasters different things | Two notifications from one trigger, with different wording for each audience.                                       |
| Complex 9: Work out a value and store it                 | Writes a flag, which is how a trigger remembers something between runs.                                             |
| Complex 10: Read a flag back again                       | Reads that flag back as an ordinary condition, so a creature that has lasted three rounds gets angry.               |
| Complex 11: Clean up after a fight                       | Undoes everything the other complex examples put in place once the encounter ends.                                  |
| Complex 12: React to one kind of item                    | Shows the difference between filtering on the item's type and filtering on the type of whoever received it.         |
| Complex 13: Drive an encounter from one trigger          | An ambush in one trigger: light the token, reveal it, open an encounter, start it, then switch itself off.          |
| Complex 14: Point an action at a different document      | One creature falls and a different one wakes up, using Act On to aim a single action elsewhere.                     |
| Complex 15: A long rest, in one place                    | Pausing the game pushes the world clock forward, which the rest example in the basic set then picks up.             |
| Complex 16: Skip a downed creature's turn                | Passes the turn along when a creature is both at zero hit points and marked dead.                                   |
| Complex 17: Delete a temporary token when it expires     | Removes a summoned creature from the map and the tracker when its status runs out.                                  |
| Complex 18: A macro that works out a number              | A macro that compares hit points before and after to report how much was taken or healed.                           |
| Complex 19: A macro instead of several triggers          | One macro covering three statuses with different wording, where the interface would have wanted three triggers.     |
| Complex 20: Borrowing another trigger's actions          | Runs the action list that lives in Complex 21, so several triggers can share one list.                              |
| Complex 21: A list of actions meant to be borrowed       | The shared list itself. Left switched off, since it is meant to be run by another trigger rather than fire on its own. |

## D&D 5e Examples

These are built on the D&D 5e events and actions, so they are only offered when
you are playing D&D 5e. Tick D&D 5e when you load examples to add them.

| Trigger                                                      | What it does                                                                                        |
| ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| DnD5e 1: Call out a heavy hit                                | Calls out an actor losing 15 or more hit points in one go.                                          |
| DnD5e 2: Call out healing                                    | The other side of the one above: calls out an actor regaining hit points.                           |
| DnD5e 3: A long rest clears all exhaustion                   | A house rule. A long rest clears every level of exhaustion rather than one.                         |
| DnD5e 4: A long rest grants a few temporary hit points       | A house rule. Characters wake from a long rest with a few temporary hit points.                     |
| DnD5e 5: A natural one on a death save                       | Calls out a natural one on a death save, which costs two failures.                                  |
| DnD5e 6: Say what concentration broke                        | Names the spell an actor stopped concentrating on, however it ended.                                |
| DnD5e 7: Keep a private note of every spell cast             | Keeps a private note, for you only, of every spell cast.                                            |
| DnD5e 8: Cheer a critical hit                                | Cheers a natural twenty on an attack.                                                               |
| DnD5e 9: Whisper stealth checks to the gamemaster            | Whispers Stealth checks to you so the table does not see how well someone hid.                      |
| DnD5e 10: Poison damage at the start of a turn               | Poison damage at the start of a poisoned creature's turn, through the system so resistance applies. |
| DnD5e 11: Dropping to zero ends concentration                | Ends concentration when an actor drops to zero hit points.                                          |
| DnD5e 12: Ask everyone to take a short rest when combat ends | Asks each character's player to take a short rest when combat ends, so they can spend hit dice.     |
| DnD5e 13: Roll perception for everyone when combat starts    | Rolls Perception for every character when combat starts.                                            |
| DnD5e 14: A lair action every round                          | Uses a monster's Lair Action feature at the top of every round, by name.                            |

## Where to Go Next

Read the notes on any example you turn on. They explain what it is showing, what
you might change, and the traps around it. Once one behaves the way you want,
the [User Guide](./user-guide) covers every event, condition, and action in
full.
