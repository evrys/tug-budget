export type PurchasableItem = {
  for: string,
  cost: number,
  level: number,
  name: string,
  link?: string,
  desc: string,
  slot?: string
}

export const wishlist: PurchasableItem[] = [
  // { for: 'Tug', cost: 65, level: 4, name: "Striking (Weapon Fundamental Rune)", link: "https://2e.aonprd.com/Equipment.aspx?ID=280", desc: "Increases weapon damage dice (e.g. 1d10 => 2d10)", priority: true },
  { for: 'Tug', cost: 150, level: 4, name: "+1 Striking Crushing Long Hammer", link: "https://2e.aonprd.com/Weapons.aspx?ID=293", desc: "2H hammer with Reach for bonking people" },
  { for: 'Tug', cost: 500, level: 4, name: "+1 Resilient Full Plate Armor", link: "https://2e.aonprd.com/Armor.aspx?ID=13", desc: "Decent Tug armor, take two" }, // Tideplate?
  // { for: 'Tug', cost: 175, level: 3, name: "+1 Striking Crushing Thrower's Bandolier", link: "https://2e.aonprd.com/Equipment.aspx?ID=2313", desc: "Stores up to 20 light hammers and duplicates runes onto them" },
  // { for: 'Tug', cost: 30, level: 3, name: "10 Light Hammers", desc: "20-foot throwing weapon for ranged Retributive Strike", link: "https://2e.aonprd.com/Weapons.aspx?ID=384" },
  // { for: 'Tug', cost: 50, level: 3, name: "Crushing (Weapon Property Rune)", link: "https://2e.aonprd.com/Equipment.aspx?ID=1298", desc: "When you critically hit a target with this weapon, your target becomes clumsy 1 and enfeebled 1 until the end of your next turn" },
  // { for: 'Tug', cost: 340, level: 8, name: "Resilient Rune (Armor)", link: "https://2e.aonprd.com/Equipment.aspx?ID=2786", desc: "+1 item bonus to all saving throws", slot: 'resilient' },
  { for: 'Tug', cost: 80, level: 4, name: "Healer's Gloves", link: "https://2e.aonprd.com/Equipment.aspx?ID=444", desc: "Action to restore 2d6+7 HP to an adjacent creature once per day, +1 item bonus to Medicine checks", slot: 'gloves' },
  { for: 'Tug', cost: 80, level: 4, name: "Lifting Belt", link: "https://2e.aonprd.com/Equipment.aspx?ID=3091&Redirected=1", desc: "+1 item bonus to Athletics, extra carrying capacity, magic lift action" },
  { for: 'Tug', cost: 1060, level: 11, name: "+2 Armor Potency Rune", link: "https://2e.aonprd.com/Equipment.aspx?ID=2785", desc: "+2 item bonus to AC", slot: 'armor-potency' },
  { for: 'Tug', cost: 700, level: 9, name: "Healer's Gloves (Greater)", link: "https://2e.aonprd.com/Equipment.aspx?ID=444", desc: "Action to restore 4d6+15 HP to an adjacent creature once per day, +2 item bonus to Medicine checks" },
  { for: 'Tug', cost: 680, level: 9, name: "Phylactery of Faithfulness", link: "https://2e.aonprd.com/Equipment.aspx?ID=452", desc: "+2 item bonus to Religion checks, can cast Augury once per day" },
  { for: 'Tug', cost: 935, level: 10, name: "+2 Weapon Potency Rune", link: "https://2e.aonprd.com/Equipment.aspx?ID=281", desc: "Increases weapon's attack bonus to 2", slot: 'weapon-potency' },
  { for: 'Tug', cost: 1065, level: 12, name: "Greater Striking Rune", link: "https://2e.aonprd.com/Equipment.aspx?ID=2829", desc: "Increases weapon damage die multiplier to 3" },
  { for: 'Tug', cost: 3440, level: 14, name: "Greater Resilient Rune (Armor)", link: "https://2e.aonprd.com/Equipment.aspx?ID=2786", desc: "+2 item bonus to all saving throws", slot: 'resilient' },
  // { for: 'Tug', cost: 58, level: 3, name: "Bracelet of Dashing", link: "https://2e.aonprd.com/Equipment.aspx?ID=415", desc: "Once per day, gain a +10-foot status bonus to your Speed for 1 minute" },
  // { for: 'Tug', cost: 85, level: 4, name: "Belt of Good Health", link: "https://2e.aonprd.com/Equipment.aspx?ID=913", desc: "+4 extra HP", slot: 'belt' },
  // { for: 'Tug', cost: 100, level: 4, name: "Sleeves of Storage", link: "https://2e.aonprd.com/Equipment.aspx?ID=745", desc: "Worn garment which magically holds up to 10 Bulk with reduced weight" },


  { for: 'Twotail', cost: 30, level: 2, name: "Fanged (Weapon Property Rune)", link: "https://2e.aonprd.com/Equipment.aspx?ID=1433", desc: "Use an action to transform into a housecat (good for sneaking?)" },
  { for: 'Twotail', cost: 340, level: 8, name: "Resilient Rune (Armor)", link: "https://2e.aonprd.com/Equipment.aspx?ID=2786", desc: "+1 item bonus to all saving throws", slot: 'resilient' },
  { for: 'Twotail', cost: 935, level: 10, name: "+2 Weapon Potency Rune", link: "https://2e.aonprd.com/Equipment.aspx?ID=281", desc: "Increases weapon's attack bonus to 2", slot: 'weapon-potency' },
  { for: 'Twotail', cost: 1060, level: 11, name: "+2 Armor Potency Rune", link: "https://2e.aonprd.com/Equipment.aspx?ID=2785", desc: "+2 item bonus to AC", slot: 'armor-potency' },
  { for: 'Twotail', cost: 1065, level: 12, name: "Greater Striking Rune", link: "https://2e.aonprd.com/Equipment.aspx?ID=2829", desc: "Increases weapon damage die multiplier to 3" },
  { for: 'Twotail', cost: 90, level: 4, name: "Trickster's Mandolin", link: "https://2e.aonprd.com/Equipment.aspx?ID=2271", desc: "+1 Performance and Deception bonus while playing the mandolin, can cast various spells like a staff", slot: 'tricksters-mandolin' },
  { for: 'Twotail', cost: 100, level: 4, name: "Sleeves of Storage", link: "https://2e.aonprd.com/Equipment.aspx?ID=745", desc: "Worn garment which magically holds up to 10 Bulk with reduced weight" },
  { for: 'Twotail', cost: 55, level: 5, name: "Shadow (Armor Property Rune)", link: "https://2e.aonprd.com/Equipment.aspx?ID=2793", desc: "You gain a +1 item bonus to Stealth checks while wearing the armor" },
  { for: 'Twotail', cost: 215, level: 6, name: "Phantasmal Doorknob", link: "https://2e.aonprd.com/Equipment.aspx?ID=2235", desc: "When affixed to a weapon, critical hits cause target to be dazzled until the end of its next turn" },
  { for: 'Twotail', cost: 230, level: 6, name: "Vaultbreaker's Harness", link: "https://2e.aonprd.com/Equipment.aspx?ID=2307", desc: "Contains a set of infiltrator's thieves' tools, infiltrator picks, a levered crowbar, and a glass cutter, magically bound to the harness" },
  { for: 'Twotail', cost: 3440, level: 14, name: "Greater Resilient Rune (Armor)", link: "https://2e.aonprd.com/Equipment.aspx?ID=2786", desc: "+2 item bonus to all saving throws", slot: 'resilient' },
  { for: 'Twotail', cost: 460, level: 8, name: "Trickster's Mandolin (Greater)", link: "https://2e.aonprd.com/Equipment.aspx?ID=2271", desc: "+1 Performance and Deception bonus while playing the mandolin, can cast Invisibility and Mirror Image among other things", slot: 'tricksters-mandolin' },
  { for: 'Twotail', cost: 900, level: 10, name: "Phantasmal Doorknob (Greater)", link: "https://2e.aonprd.com/Equipment.aspx?ID=2235", desc: "When affixed to a weapon, critical hit causes target to be blinded until the end of its next turn" },
  { for: 'Twotail', cost: 85, level: 4, name: "Belt of Good Health", link: "https://2e.aonprd.com/Equipment.aspx?ID=913", desc: "+4 extra HP", slot: 'belt' },
  // { for: 'Twotail', cost: 24000, level: 18, name: "Mercurial Mantle", link: "https://2e.aonprd.com/Equipment.aspx?ID=1067", desc: "+2 to Dexterity, other powerful roguish abilities" },

  { for: 'Merrek', cost: 900, level: 10, name: "Instinct Crown", link: "https://2e.aonprd.com/Equipment.aspx?ID=2338", desc: "Rage as a free action, makes you Large for Giant instinct" },
  { for: 'Merrek', cost: 340, level: 8, name: "Resilient Rune (Armor)", link: "https://2e.aonprd.com/Equipment.aspx?ID=2786", desc: "+1 item bonus to all saving throws", slot: 'resilient' },
  { for: 'Merrek', cost: 935, level: 10, name: "+2 Weapon Potency Rune", link: "https://2e.aonprd.com/Equipment.aspx?ID=281", desc: "Increases weapon's attack bonus to 2", slot: 'weapon-potency' },
  { for: 'Merrek', cost: 1065, level: 12, name: "Greater Striking Rune", link: "https://2e.aonprd.com/Equipment.aspx?ID=2829", desc: "Increases weapon damage die multiplier to 3" },
  { for: 'Merrek', cost: 1060, level: 11, name: "+2 Armor Potency Rune", link: "https://2e.aonprd.com/Equipment.aspx?ID=2785", desc: "+2 item bonus to AC", slot: 'armor-potency' },
  { for: 'Merrek', cost: 52, level: 3, name: "Bracers of Missile Deflection", link: "https://2e.aonprd.com/Equipment.aspx?ID=3061", desc: "Once-per-day reaction to gain +2 AC against a non-crit ranged weapon attack", slot: 'bracers' },
  { for: 'Merrek', cost: 58, level: 3, name: "Bracelet of Dashing", link: "https://2e.aonprd.com/Equipment.aspx?ID=415", desc: "Once per day, gain a +10-foot status bonus to your Speed for 1 minute" },
  { for: 'Merrek', cost: 80, level: 4, name: "Lifting Belt", link: "https://2e.aonprd.com/Equipment.aspx?ID=3091&Redirected=1", desc: "+1 item bonus to Athletics, extra carrying capacity, magic lift action" },
  { for: 'Merrek', cost: 80, level: 4, name: "Healer's Gloves", link: "https://2e.aonprd.com/Equipment.aspx?ID=444", desc: "Action to restore 2d6+7 HP to an adjacent creature once per day, +1 item bonus to Medicine checks", slot: 'gloves' },
  // { for: 'Merrek', cost: 85, level: 4, name: "Belt of Good Health", link: "https://2e.aonprd.com/Equipment.aspx?ID=913", desc: "+4 extra HP", slot: 'belt' },
  // { for: 'Merrek', cost: 100, level: 4, name: "Sleeves of Storage", link: "https://2e.aonprd.com/Equipment.aspx?ID=745", desc: "Worn garment which magically holds up to 10 Bulk with reduced weight" },
  { for: 'Merrek', cost: 3440, level: 14, name: "Greater Resilient Rune (Armor)", link: "https://2e.aonprd.com/Equipment.aspx?ID=2786", desc: "+2 item bonus to all saving throws", slot: 'resilient' },

  { for: 'Elyar', cost: 360, level: 7, name: "Ring of Wizardry (Type I)", link: "https://2e.aonprd.com/Equipment.aspx?ID=462", desc: "+1 item bonus to Arcana checks and two extra 1st-level arcane spell slots", slot: 'ring-of-wizardry' },
  { for: 'Elyar', cost: 340, level: 8, name: "Resilient Rune (Armor)", link: "https://2e.aonprd.com/Equipment.aspx?ID=2786", desc: "+1 item bonus to all saving throws", slot: 'resilient' },
  { for: 'Elyar', cost: 1000, level: 10, name: "Shadow Signet", link: "https://2e.aonprd.com/Equipment.aspx?ID=3108&NoRedirect=1", desc: "Free action metamagic which changes spell to target Fortitude or Reflex instead of AC" },
  { for: 'Elyar', cost: 1000, level: 10, name: "Ring of Wizardry (Type II)", link: "https://2e.aonprd.com/Equipment.aspx?ID=462", desc: "+2 item bonus to Arcana checks, two 2nd-level spell slots and one 1st-level", slot: 'ring-of-wizardry' },
  { for: 'Elyar', cost: 230, level: 6, name: "Endless Grimoire", link: "https://2e.aonprd.com/Equipment.aspx?ID=992", desc: "+1 item bonus to Learn a Spell and an extra first-level spell slot" },
  { for: 'Elyar', cost: 52, level: 3, name: "Bracers of Missile Deflection", link: "https://2e.aonprd.com/Equipment.aspx?ID=3061", desc: "Once-per-day reaction to gain +2 AC against a non-crit ranged weapon attack", slot: 'bracers' },
  { for: 'Elyar', cost: 80, level: 4, name: "Healer's Gloves", link: "https://2e.aonprd.com/Equipment.aspx?ID=444", desc: "Action to restore 2d6+7 HP to an adjacent creature once per day, +1 item bonus to Medicine checks", slot: 'gloves' },
  { for: 'Elyar', cost: 85, level: 4, name: "Belt of Good Health", link: "https://2e.aonprd.com/Equipment.aspx?ID=913", desc: "+4 extra HP", slot: 'belt' },
  // { for: 'Elyar', cost: 100, level: 4, name: "Sleeves of Storage", link: "https://2e.aonprd.com/Equipment.aspx?ID=745", desc: "Worn garment which magically holds up to 10 Bulk with reduced weight" },
  { for: 'Elyar', cost: 3440, level: 14, name: "Greater Resilient Rune (Armor)", link: "https://2e.aonprd.com/Equipment.aspx?ID=2786", desc: "+2 item bonus to all saving throws", slot: 'resilient' },

  { for: 'Crimson', cost: 500, level: 8, name: "Pendant of Lingering Magic", desc: "Allows sustain spell to be active for 3 rounds after sustain stops" },
  { for: 'Crimson', cost: 340, level: 8, name: "Resilient Rune (Armor)", link: "https://2e.aonprd.com/Equipment.aspx?ID=2786", desc: "+1 item bonus to all saving throws", slot: 'resilient' },
  { for: 'Crimson', cost: 470, level: 8, name: "Staff of Healing (Greater)", link: "https://2e.aonprd.com/Equipment.aspx?ID=3042", desc: "+2 item bonus to all healing, extra heal spells, other spells", slot: 'staff-of-healing' },
  { for: 'Crimson', cost: 80, level: 4, name: "Healer's Gloves", link: "https://2e.aonprd.com/Equipment.aspx?ID=444", desc: "Action to restore 2d6+7 HP to an adjacent creature once per day, +1 item bonus to Medicine checks", slot: 'gloves', },
  { for: 'Crimson', cost: 700, level: 9, name: "Healer's Gloves (Greater)", link: "https://2e.aonprd.com/Equipment.aspx?ID=444", desc: "Action to restore 4d6+15 HP to an adjacent creature once per day, +2 item bonus to Medicine checks", slot: 'gloves' },
  { for: 'Crimson', cost: 1000, level: 10, name: "Shadow Signet", link: "https://2e.aonprd.com/Equipment.aspx?ID=3108&NoRedirect=1", desc: "Free action metamagic which changes spell to target Fortitude or Reflex instead of AC" },
  { for: 'Crimson', cost: 3440, level: 14, name: "Greater Resilient Rune (Armor)", link: "https://2e.aonprd.com/Equipment.aspx?ID=2786", desc: "+2 item bonus to all saving throws", slot: 'resilient' },
  { for: 'Crimson', cost: 52, level: 3, name: "Bracers of Missile Deflection", link: "https://2e.aonprd.com/Equipment.aspx?ID=3061", desc: "Once-per-day reaction to gain +2 AC against a non-crit ranged weapon attack", slot: 'bracers' },
  { for: 'Crimson', cost: 85, level: 4, name: "Belt of Good Health", link: "https://2e.aonprd.com/Equipment.aspx?ID=913", desc: "+4 extra HP", slot: 'belt' },
  // { for: 'Crimson', cost: 100, level: 4, name: "Sleeves of Storage", link: "https://2e.aonprd.com/Equipment.aspx?ID=745", desc: "Worn garment which magically holds up to 10 Bulk with reduced weight" },

  // { for: 'Citadel Altaerein', cost: 14, name: "Make General Repairs", desc: "14 days, crafting, speciality crafting (woodworking), or hired woodworker" },
  // { for: 'Citadel Altaerein', cost: 28, name: "Rebuild Battlements", desc: "28 days, crafting, speciality crafting (stonemasonry), or hired stonemasons" },
  // { for: 'Citadel Altaerein', cost: 24, name: "Repair Crumbled Walls", desc: "24 days, crafting, speciality crafting (stonemasonry), or hired stonemasons" },
]