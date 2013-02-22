#overview #rough

Overview
--------

Gambit is an arena game played in short rounds on a small map, with a handful of units which temporarily gain powers by standing on coloured nodes.

You start with a small group of grunt units, which have simple guns. They are controlled as in an RTS, by clicking places for them to move to.

Units are always aggressive -- they will automatically fire on any enemy in range. 

When all your units are dead, you lose. There is no way to create more units during the game. 

-------------------------

Terrain
-------

The arena consists of:

 * Regular land
 * Obstacles
 * Cover
 * Stealth cover
 * Colour nodes

There is fog of war -- you can always see all terrain, but your units can see enemy units only in a sight radius around themselves. **However**, while a unit stays still its sight radius gradually increases. When it moves, the radius immediately shrinks back down to the regular size.

Units cannot move or fire past obstacles (unless a colour bonus lets them do so).

Units in cover gain a defense bonus. Units in stealth cover are invisible to enemy units unless they fire, or an enemy unit enters the same cover.

-------------------------

Starting Out
------------

### Team Choice

I'm not sure about this yet. Originally there would be multiple unit types which you would buy using a pool of credits. The colour bonuses probably make this obsolete. Instead, either allow assigning some colour bonus pools, or skip the whole step.

### Map placement

Rather than have fixed starting points for each player and then have to make the map itself "fair", generate the map totally at random and then, before play starts, allow each player to place their units anywhere they like on the map, either individually or together. Neither player can see the other player's placements until the game starts. It is expected that players will choose very similar placements often enough to be amusing.


-------------------------

Colour Nodes
------------

The map is scattered with coloured resource nodes which grant bonuses. A unit standing near one of these nodes slowly gains points in that colour, which are then used automatically until depleted. 

There are a small number of base colours, but a unit that holds more than one will gain new powers according to the combination (think *Magicka*).

### Base colours

This list is intended as an example -- real design to come later

 * **Red**: Strength. Massively increases gun damage (mnemonic: heat)
 * **Yellow**: Range. Changes gun to a beam weapon with long range (mnemonic: sunlight)
 * **Blue**: Area. Changes gun to a short-range wide-spread cannon (mnemonic: rain)
 * **Green**: Defense. Unit regenerates health (mnemonic: health)

Combinations:

 * **Red + Yellow**: Gun becomes a long-range cannon which can fire over obstacles (and has some splash damage)
 * **Red + Blue**: Strength and area. No idea.
 * **Red + Green**: Gun becomes a healing weapon for nearby allies
 * **Yellow + Blue**: Gun becomes a sniper rifle with very long range but slow fire and no splash or obstacle-penetration
 * **Yellow + Green**: Range and area. Run speed, perhaps?
 * **Blue + Green**: Unit projects a shield which absorbs incoming fire. Consumed per hit taken.

Advanced combinations of three or more colours should do crazy things, briefly.

Units cannot choose to use or not use colour points -- if they have them, they are used, in whatever combination is available.

Units should be able to share their colours somehow -- perhaps just by standing close together?

-------------------------

Short Rounds
------------

The game will actively discourage long rounds and camping:

 * Player-chosen start points allow various initial strategies but make it likely there'll be immediate conflict
 * No new unit production, resources are finite
 * More colour nodes than units per team, so you can't camp on every node
 * Sight radius increases while still, so two camping players will see each other
 * Colour pools fill up relatively quickly to a maximum, and are then depleted only when used (not just by running around, except perhaps for speed buffs and such). So camping quickly stops granting more advantage
