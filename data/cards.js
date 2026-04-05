// ============================================================
//  SPAR CHAMPIONS — CARD DATA
//  To add a new champion: copy any entry in CHAMPIONS and edit
//  To add a new supporter: copy any entry in SUPPORTERS and edit
//  Image filename must match the file in images/champions/ or images/supporters/
//  Categories: "Wizards" | "Archers" | "Dragons" | "Sea Creatures" | "Warriors" | "Sky Riders"
//  Supporter appliesTo: "all" | "Wizards" | "Wizard of Life" (any category or exact name)
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

  // ── ARCHERS ──────────────────────────────────────────────
  {
    name: "Storm Archer",
    category: "Archers",
    hp: 65,
    sparRoll: 3,
    sparAbility: "Rapid fire! Deal 5 damage to all opponent cards!",
    image: "storm-archer.png"
  },

  // ── DRAGONS ──────────────────────────────────────────────
  {
    name: "Inferno Dragon",
    category: "Dragons",
    hp: 65,
    sparRoll: 6,
    sparAbility: "Dragon breath! 40 damage to active card!",
    image: "inferno-dragon.png"
  },

  // ── SEA CREATURES ─────────────────────────────────────────
  {
    name: "Leviathan",
    category: "Sea Creatures",
    hp: 65,
    sparRoll: 4,
    sparAbility: "Tidal surge! Opponent loses their next attack!",
    image: "leviathan.png"
  },

  // ── WARRIORS ─────────────────────────────────────────────
  {
    name: "Iron Sentinel",
    category: "Warriors",
    hp: 65,
    sparRoll: 2,
    sparAbility: "Iron shield! Block all damage this turn!",
    image: "iron-sentinel.png"
  },

  // ── SKY RIDERS ───────────────────────────────────────────
  {
    name: "Sky Rider",
    category: "Sky Riders",
    hp: 65,
    sparRoll: 5,
    sparAbility: "Dive bomb! Deal 20 damage and draw a card!",
    image: "sky-rider.png"
  },
];

// ============================================================

const SUPPORTERS = [
  {
    name: "Shield of Light",
    ability: "Block all damage for 1 turn. Play before your opponent rolls.",
    appliesTo: "all",   // works for every champion
    image: "shield-of-light.png"
  },
  {
    name: "Arcane Boost",
    ability: "Double your next SPAR ability damage.",
    appliesTo: "Wizards",   // only works for Wizard category
    image: "arcane-boost.png"
  },
  {
    name: "Life Drain",
    ability: "Steal 10 HP from opponent and add to your champion.",
    appliesTo: "Wizard of Darkness",   // only works for this specific champion
    image: "life-drain.png"
  },
];

// ============================================================
//  CATEGORIES — add new ones here if you expand
// ============================================================
const CATEGORIES = [
  "Wizards",
  "Archers",
  "Dragons",
  "Sea Creatures",
  "Warriors",
  "Sky Riders",
];
