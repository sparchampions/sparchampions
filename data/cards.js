// ============================================================
//  SPAR CHAMPIONS — CARD DATA
//  To add a new champion: copy any entry and edit
//  Image filename must match file in images/champions/ or images/supporters/
//  Categories: "Wizards" | "Sky Riders" | "Wild Beasts" | "Sea Creatures"
//              | "Archers" | "Knights" | "Elves" | "Monks" | "Insects" 
//              | "Relics" | "Dragons"
// ============================================================

const CHAMPIONS = [

  // ── WIZARDS ──────────────────────────────────────────────
  {
    name: "Wizard of Life",
    category: "Wizards",
    hp: 65,
    sparRoll: 1,
    sparAbility: "A protective spell envelops you! Opponents attack weakened by 2 forever!",
    image: "wizard-of-life.png"
  },
  {
    name: "Wizard of Darkness",
    category: "Wizards",
    hp: 65,
    sparRoll: 2,
    sparAbility: "A damaging spell envelops your opponent! 2 turns of 10 DP!",
    image: "wizard-of-darkness.png"
  },
  {
    name: "Wizard of Balance",
    category: "Wizards",
    hp: 65,
    sparRoll: 3,
    sparAbility: "Find your balance! Deal 10 DP or heal 10 HP!",
    image: "wizard-of-balance.png"
  },
  {
    name: "Wizard of Stealth",
    category: "Wizards",
    hp: 65,
    sparRoll: 4,
    sparAbility: "Sneak attack! Dodge opponents attacks for 4 turns!",
    image: "wizard-of-stealth.png"
  },
  {
    name: "Wizard of Creation",
    category: "Wizards",
    hp: 65,
    sparRoll: 5,
    sparAbility: "Build and create! Summon improved staff to your hand!",
    image: "wizard-of-creation.png"
  },
  {
    name: "Wizard of Havoc",
    category: "Wizards",
    hp: 65,
    sparRoll: 6,
    sparAbility: "Reek havoc wizard! 30 damage!!!",
    image: "wizard-of-havoc.png"
  },

  // ── BIRDS ───────────────────────────────────────────
  {
    name: "Magical Falcon",
    category: "Birds",
    hp: 35,
    sparRoll: 1,
    sparAbility: "Talons of fury! Roll again! Deal threefold DP!",
    image: "magical-falcon.png"
  },
  {
    name: "Rising Phoenix",
    category: "Birds",
    hp: 50,
    sparRoll: 2,
    sparAbility: "Fate favors the lowly! Below 25 HP, regain 10 HP otherwise deal 10 DP!",
    image: "rising-phoenix.png"
  },
  {
    name: "Wise Owl",
    category: "Birds",
    hp: 45,
    sparRoll: 3,
    sparAbility: "Knowledge of the ancients! Bolster your attack by 2 forever more!",
    image: "wise-owl.png"
  },
  {
    name: "Soaring Pegasus",
    category: "Birds",
    hp: 50,
    sparRoll: 4,
    sparAbility: "Soar or Charge! Evade opponents next DP or deal 10 DP!",
    image: "soaring-pegasus.png"
  },
  {
    name: "Ancient Pterosaur",
    category: "Birds",
    hp: 60,
    sparRoll: 5,
    sparAbility: "Wings become guards! Opponent takes their next DP!",
    image: "ancient-pterosaur.png"
  },
  {
    name: "Cryptic Ostrich",
    category: "Birds",
    hp: 40,
    sparRoll: 6,
    sparAbility: "Run! Kick! Roll again: < 3 deal 5 DP, < 6 deal 10 DP, = 6 deal 15 DP!",
    image: "cryptic-ostrich.png"
  },

  // ── WILD BEASTS ──────────────────────────────────────────
  {
    name: "Slippery Snake",
    category: "Wild Beasts",
    hp: 30,
    sparRoll: 1,
    sparAbility: "Fangs flash! Deliver 6 damage points of pain!",
    image: "slippery-snake.png"
  },
  {
    name: "Mythical Unicorn",
    category: "Wild Beasts",
    hp: 40,
    sparRoll: 2,
    sparAbility: "Touched by magic! Add 1 extra DP for 4 turns!",
    image: "mythical-unicorn.png"
  },
  {
    name: "Fuzzy Mammoth",
    category: "Wild Beasts",
    hp: 40,
    sparRoll: 3,
    sparAbility: "Mammoth strength! Roll again and add 6 more DP!",
    image: "fuzzy-mammoth.png"
  },
  {
    name: "Shifty Chameleon",
    category: "Wild Beasts",
    hp: 30,
    sparRoll: 4,
    sparAbility: "Shifty strikes again! Swap HP with opponent if you wish!",
    image: "shifty-chameleon.png"
  },
  {
    name: "Mighty Smilodon",
    category: "Wild Beasts",
    hp: 45,
    sparRoll: 5,
    sparAbility: "Fangs sharpened! Add 3 extra DP every turn onwards!",
    image: "mighty-smilodon.png"
  },
  {
    name: "Playful Monkey",
    category: "Wild Beasts",
    hp: 55,
    sparRoll: 6,
    sparAbility: "Ooo ooo aaa eeeee! Multiply roll by 3 and opponent skips a turn!",
    image: "playful-monkey.png"
  },

  // ── SEA CREATURES ────────────────────────────────────────
  {
    name: "Sea Leviathan",
    category: "Sea Creatures",
    hp: 60,
    sparRoll: 1,
    sparAbility: "Tentacles of the deep attack! Deal 20 DP!",
    image: "sea-leviathan.png"
  },
  {
    name: "Angler Fish",
    category: "Sea Creatures",
    hp: 65,
    sparRoll: 2,
    sparAbility: "Sharp attack! You are lured in! No DP for one turn, then deal 10 DP!",
    image: "angler-fish.png"
  },
  {
    name: "Great White Shark",
    category: "Sea Creatures",
    hp: 50,
    sparRoll: 3,
    sparAbility: "Underwater attack, you drown! Half opponents HP!",
    image: "great-white-shark.png"
  },
  {
    name: "Magic Whale",
    category: "Sea Creatures",
    hp: 50,
    sparRoll: 4,
    sparAbility: "Magic Spout!! Roll again and add 5 more DP!",
    image: "magic-whale.png"
  },
  {
    name: "Naughty Narwhal",
    category: "Sea Creatures",
    hp: 50,
    sparRoll: 5,
    sparAbility: "Horn attack!! Roll twice and multiply them to deal DP!",
    image: "naughty-narwhal.png"
  },
  {
    name: "Giant Sea Turtle",
    category: "Sea Creatures",
    hp: 55,
    sparRoll: 6,
    sparAbility: "Hard Shell!! Opponents attack weakened by 1 forever!",
    image: "giant-sea-turtle.png"
  },

  // ── ARCHERS ──────────────────────────────────────────────
  {
    name: "Archer of Wind",
    category: "Archers",
    hp: 50,
    sparRoll: 1,
    sparAbility: "Channel the storm! Roll anew, add 4 to your roll or double your roll.",
    image: "archer-of-wind.png"
  },
  {
    name: "Archer of Fire",
    category: "Archers",
    hp: 65,
    sparRoll: 2,
    sparAbility: "Fire burns your roll! Opponent skips a turn.",
    image: "archer-of-fire.png"
  },
  {
    name: "Archer of Water",
    category: "Archers",
    hp: 65,
    sparRoll: 3,
    sparAbility: "Water is slippery! Deal 15 DP or weaken opponents attack by 1 for 4 turns.",
    image: "archer-of-water.png"
  },
  {
    name: "Archer of Earth",
    category: "Archers",
    hp: 60,
    sparRoll: 4,
    sparAbility: "Earth quakes! Half opponents HP and add to your HP!!",
    image: "archer-of-earth.png"
  },
  {
    name: "Archer of Metal",
    category: "Archers",
    hp: 65,
    sparRoll: 5,
    sparAbility: "Unbreakable! Opponents attack is protected for 2 turns!",
    image: "archer-of-metal.png"
  },
  {
    name: "Archer of Poison",
    category: "Archers",
    hp: 65,
    sparRoll: 6,
    sparAbility: "Slow poison! Increase attack by 1 forever!",
    image: "archer-of-poison.png"
  },

  // ── KNIGHTS ──────────────────────────────────────────────
  {
    name: "Shining Knight",
    category: "Knights",
    hp: 50,
    sparRoll: 1,
    sparAbility: "Chance favors the brave! Roll again! < 4 shield heals 10 HP else sword deals 10 DP.",
    image: "shining-knight.png"
  },
  {
    name: "Brilliant Knight",
    category: "Knights",
    hp: 65,
    sparRoll: 2,
    sparAbility: "Wisdom teaches you! < 20 HP attack increases by 4 else deal 20 DP.",
    image: "brilliant-knight.png"
  },
  {
    name: "Mystic Knight",
    category: "Knights",
    hp: 65,
    sparRoll: 3,
    sparAbility: "Magic engulfs! If opponents HP < 20 heal 10 HP else deal 10 DP.",
    image: "mystic-knight.png"
  },
  {
    name: "Dark Knight",
    category: "Knights",
    hp: 65,
    sparRoll: 4,
    sparAbility: "Fight unfair! If opponent is < 20 HP deal 15 DP else deal 10 DP.",
    image: "dark-knight.png"
  },
  {
    name: "Dragon Knight",
    category: "Knights",
    hp: 65,
    sparRoll: 5,
    sparAbility: "Dragon power! Choose a dragon based supporter card and use it!",
    image: "dragon-knight.png"
  },
  {
    name: "High Knight",
    category: "Knights",
    hp: 65,
    sparRoll: 6,
    sparAbility: "Knight above king! Deal 30 DP or heal 20 HP.",
    image: "high-knight.png"
  },

  // ── ELVES ────────────────────────────────────────────────
  {
    name: "Wandering Elf",
    category: "Elves",
    hp: 55,
    sparRoll: 1,
    sparAbility: "Swift as the wind! Feel 10 DP of my wrath!",
    image: "wandering-elf.png"
  },
  {
    name: "Rogue Elf",
    category: "Elves",
    hp: 65,
    sparRoll: 2,
    sparAbility: "Never saw me! > 30 HP deal 10 DP, < 30 HP deal 15 DP, = 30 HP deal 25 DP.",
    image: "rogue-elf.png"
  },
  {
    name: "Mining Elf",
    category: "Elves",
    hp: 65,
    sparRoll: 3,
    sparAbility: "Take day off or work! Deal (10 self DP and deal 30 DP) or heal 20 HP.",
    image: "mining-elf.png"
  },
  {
    name: "Trading Elf",
    category: "Elves",
    hp: 65,
    sparRoll: 4,
    sparAbility: "Sell or buy! Deal 10 DP but you can sacrifice 5 HP to make it 25.",
    image: "trading-elf.png"
  },
  {
    name: "Winter Elf",
    category: "Elves",
    hp: 65,
    sparRoll: 5,
    sparAbility: "Cold freeze! Opponent frozen for 2 turns, each of the turns attack increased by 1.",
    image: "winter-elf.png"
  },
  {
    name: "Fire Elf",
    category: "Elves",
    hp: 65,
    sparRoll: 6,
    sparAbility: "Burn fire unleashed! Increase attack by 15 for 2 turns.",
    image: "fire-elf.png"
  },

  // ── MONKS ────────────────────────────────────────────────
  {
    name: "Monk of Silence",
    category: "Monks",
    hp: 60,
    sparRoll: 1,
    sparAbility: "In stillness, strength returns! Heal 20 HP!",
    image: "monk-of-silence.png"
  },
  {
    name: "Monk of Wisdom",
    category: "Monks",
    hp: 65,
    sparRoll: 2,
    sparAbility: "Learn to evade! Next time opponent rolls SPAR, evade negative effects!",
    image: "monk-of-wisdom.png"
  },
  {
    name: "Monk of Magic",
    category: "Monks",
    hp: 65,
    sparRoll: 3,
    sparAbility: "Magic powers awaken! Dodge 2 turns and deal 3 more DP while dodge is over.",
    image: "monk-of-magic.png"
  },
  {
    name: "Monk of Nature",
    category: "Monks",
    hp: 65,
    sparRoll: 4,
    sparAbility: "Vine power! Attack increased by 1 forever and deal 25 DP.",
    image: "monk-of-nature.png"
  },
  {
    name: "Monk of Force",
    category: "Monks",
    hp: 65,
    sparRoll: 5,
    sparAbility: "Punch power! Deal 35 DP.",
    image: "monk-of-force.png"
  },
  {
    name: "Monk of Healing",
    category: "Monks",
    hp: 65,
    sparRoll: 6,
    sparAbility: "Healing activates! Heal 25 HP.",
    image: "monk-of-healing.png"
  },

  // ── INSECTS ──────────────────────────────────────────────
  {
    name: "Dung Beetle",
    category: "Insects",
    hp: 60,
    sparRoll: 1,
    sparAbility: "Size matters! Deal half your current HP to your opponent!",
    image: "dung-beetle.png"
  },
  {
    name: "Praying Mantis",
    category: "Insects",
    hp: 65,
    sparRoll: 2,
    sparAbility: "Bug canniball! Deal 35 DP if opponent is a bug else deal 20.",
    image: "praying-mantis.png"
  },
  {
    name: "Atrocious Ant",
    category: "Insects",
    hp: 65,
    sparRoll: 3,
    sparAbility: "Stronger with colony! Deal 5 DP for each card in hand.",
    image: "atrocious-ant.png"
  },
  {
    name: "Ferocious Firefly",
    category: "Insects",
    hp: 65,
    sparRoll: 4,
    sparAbility: "Fire ignites the weak! Deal 25 DP if under 20 HP else heal 10.",
    image: "ferocious-firefly.png"
  },
  {
    name: "Metallic Spider",
    category: "Insects",
    hp: 65,
    sparRoll: 5,
    sparAbility: "Venom strikes! Deal 10 damage then increase DP by 4.",
    image: "metallic-spider.png"
  },
  {
    name: "Lucky Ladybug",
    category: "Insects",
    hp: 65,
    sparRoll: 6,
    sparAbility: "Luck prevails! Under 5 HP heal 40 HP else heal 5.",
    image: "lucky-ladybug.png"
  },
// ── INSECTS ──────────────────────────────────────────────
  {
    name: "Great Sword",
    category: "Relics",
    hp: 50,
    sparRoll: 1,
    sparAbility: "Stand Your Ground! 5 self HP renewed and add 5 DP!",
    image: "great-sword.png"
  },
  {
    name: "Great Shield",
    category: "Relics",
    hp: 50,
    sparRoll: 2,
    sparAbility: "Fortify yourself! 10 self HP renewed!",
    image: "great-shield.png"
  },
  {
    name: "Gold Coin",
    category: "Relics",
    hp: 45,
    sparRoll: 3,
    sparAbility: "Gamble with destiny! Roll again. < 4 suffer 20 self DP else gain 20 HP!",
    image: "gold-coin.png"
  },
  {
    name: "Pot of Gold",
    category: "Relics",
    hp: 50,
    sparRoll: 4,
    sparAbility: "Greed has its price! Roll again! < 4 lose 10 self DP else gain 30 HP.",
    image: "pot-of-gold.png"
  },
  {
    name: "Mythical Medallion",
    category: "Relics",
    hp: 60,
    sparRoll: 5,
    sparAbility: "Ancient magic flows! Restore 5 HP for the next 5 turns!",
    image: "mythical-medallion.png"
  },
  {
    name: "Mythical Compass",
    category: "Relics",
    hp: 60,
    sparRoll: 6,
    sparAbility: "Ancient magic flows! Add 5 more DP for the next 5 turns!",
    image: "mythical-compass.png"
  },
  // ── DRAGONS ──────────────────────────────────────────────
  {
    name: "Dreadful Dragon",
    category: "Dragons",
    hp: 60,
    sparRoll: 3,
    sparAbility: "Withering Curse! Opponent loses SPAR ability!",
    image: "dreadful-dragon.png"
  },
  {
    name: "Icy Dragon",
    category: "Dragons",
    hp: 60,
    sparRoll: 3,
    sparAbility: "Frozen stiff! Opponent skips three turns!",
    image: "icy-dragon.png"
  },
  {
    name: "Blazing Dragon",
    category: "Dragons",
    hp: 60,
    sparRoll: 3,
    sparAbility: "A raging firestorm engulfs! Suffer 6 DP for 2 turns!",
    image: "blazing-dragon.png"
  },
  {
    name: "Wishful Dragon",
    category: "Dragons",
    hp: 45,
    sparRoll: 2,
    sparAbility: "Dragon Magic! Double your total self HP!",
    image: "wishful-dragon.png"
  },
  {
    name: "Magical Dragon",
    category: "Dragons",
    hp: 50,
    sparRoll: 6,
    sparAbility: "Fortune favors you! Roll anew & deal triple DP!",
    image: "magical-dragon.png"
  },
  {
    name: "Whimsical Dragon",
    category: "Dragons",
    hp: 50,
    sparRoll: 4,
    sparAbility: "A puff of warm magic! 5 DP to opponent, 5 self HP!",
    image: "whimsical-dragon.png"
  }

];

// ============================================================
//  SUPPORTERS
// ============================================================

const SUPPORTERS = [
  {
    name: "Dragon Fruit",
    ability: "Heals your dragon by 30 HP points!",
    appliesTo: "Dragons",
    image: "dragon-fruit.png"
  },
  {
    name: "Trade Route Map",
    ability: "Pick a random card from your opponents hand and swap it if you wish!",
    appliesTo: "all",
    image: "trade-route-map.png"
  },
  {
    name: "Obsidian Upgrade",
    ability: "Add 5 points of healing to your Great Shield!",
    appliesTo: "all",
    image: "obsidian-upgrade.png"
  },
  {
    name: "Healing Coin",
    ability: "Absorbs all negative effects, no self damage!",
    appliesTo: "all",
    image: "healing-coin.png"
  },
  {
    name: "Temple of Birds",
    ability: "All bird monsters attack increases by 5!",
    appliesTo: "Sky Riders",
    image: "temple-of-birds.png"
  },
  {
    name: "Improved Staff",
    ability: "Heals wizards by 15 points!",
    appliesTo: "Wizards",
    image: "improved-staff.png"
  },
  {
    name: "Metamorphosis",
    ability: "Cards starting under 40 HP rise to 70!",
    appliesTo: "all",
    image: "metamorphosis.png"
  },
  {
    name: "Magic Arrows",
    ability: "Archer attack increases by 10 points.",
    appliesTo: "Archers",
    image: "magic-arrows.png"
  },
  {
    name: "Healing Robe",
    ability: "Wear your robe to heal you by 10 points.",
    appliesTo: "Wizards",
    image: "healing-robe.png"
  },
  {
    name: "Monastery",
    ability: "Increase monk DP by 15.",
    appliesTo: "Monks",
    image: "monastery.png"
  },
  {
    name: "Elf Upgrade",
    ability: "Increase elf's health by 20.",
    appliesTo: "Elves",
    image: "elf-upgrade.png"
  },
  {
    name: "Knight Tools",
    ability: "Increase knight's health or DP by 20.",
    appliesTo: "Knights",
    image: "knight-tools.png"
  },
  {
    name: "Dragon Sword",
    ability: "Increase dragon's attack by 20.",
    appliesTo: "Dragons",
    image: "dragon-sword.png"
  },
  {
    name: "King's Blessing",
    ability: "Increase knight's DP by 30.",
    appliesTo: "Knights",
    image: "kings-blessing.png"
  },
  {
    name: "Good Condition",
    ability: "Increase relic HP by 10.",
    appliesTo: "all",
    image: "good-condition.png"
  },
  {
    name: "Underwater Temple",
    ability: "Increase sea creatures attack by 25.",
    appliesTo: "Sea Creatures",
    image: "underwater-temple.png"
  },
  {
    name: "Forest Magic",
    ability: "Evade a turn if creature is a land animal.",
    appliesTo: "Wild Beasts",
    image: "forest-magic.png"
  },
  {
    name: "Mystical Bow",
    ability: "Increase archer's HP by 15.",
    appliesTo: "Archers",
    image: "mystical-bow.png"
  },
  {
    name: "Meditation",
    ability: "Increase monk HP by 20.",
    appliesTo: "Monks",
    image: "meditation.png"
  },
  {
    name: "New Wand",
    ability: "Increase wizards attack by 35.",
    appliesTo: "Wizards",
    image: "new-wand.png"
  },
  {
    name: "Warm Waters",
    ability: "Increase sea monsters HP by 20.",
    appliesTo: "Sea Creatures",
    image: "warm-waters.png"
  },
  {
    name: "Tectonic Shift",
    ability: "Increase land animals DP by 20.",
    appliesTo: "Wild Beasts",
    image: "tectonic-shift.png"
  },
  {
    name: "Cloud Coverage",
    ability: "All bird monsters evade 2 turns of damage.",
    appliesTo: "Sky Riders",
    image: "cloud-coverage.png"
  },
  {
    name: "Elf Magic",
    ability: "Increase elf's DP by 25.",
    appliesTo: "Elves",
    image: "elf-magic.png"
  },
  {
    name: "Mangrove",
    ability: "Heal sea and bird monsters by 30 HP.",
    appliesTo: "Sea Creatures",
    image: "mangrove.png"
  },
  {
    name: "Kelp",
    ability: "Opponent skips 3 turns.",
    appliesTo: "all",
    image: "kelp.png"
  },
  {
    name: "Seaweed",
    ability: "Heal 30 HP.",
    appliesTo: "all",
    image: "seaweed.png"
  },
  {
    name: "Banyan",
    ability: "Pick an extra card from the deck!!",
    appliesTo: "all",
    image: "banyan.png"
  },
  {
    name: "Maple",
    ability: "Opponent trapped, skips 1 turn. Heal yourself by 20 HP.",
    appliesTo: "all",
    image: "maple.png"
  },
  {
    name: "Venus Fly Trap",
    ability: "Opponent health reduced to 10 HP.",
    appliesTo: "all",
    image: "venus-fly-trap.png"
  }
];

// ============================================================
//  CATEGORIES
// ============================================================
const CATEGORIES = [
  "Wizards",
  "Dragons",
  "Sky Riders",
  "Wild Beasts",
  "Sea Creatures",
  "Archers",
  "Knights",
  "Elves",
  "Monks",
  "Insects",
  "Relics"
];
