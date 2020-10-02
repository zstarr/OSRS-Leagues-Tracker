import { LeagueLocations } from './league-locations.model';
import { LeagueTask } from "./league-tasks.model";

export const LeagueTaskArrayEasy: LeagueTask[] = [
    { name: "Client of Kourend", task: "Complete the quest \"Client of Kourend\".", skills: { other: "See quest page." }, locations: [ LeagueLocations.Zeah ] },
    { name: "Complete a Banshee Task", task: "Receive and complete a Banshee slayer task.", skills: { slayer: 15 }, locations: [ LeagueLocations.Morytania ]  },
    { name: "Steal a Golovanova Fruit Top", task: "Steal a Golovanova fruit top from a fruit stall in Hosidius.", skills: { thieving: 25 }, locations: [ LeagueLocations.Zeah ] },
    { name: "Equip Tier 5 Shayzien Armour", task: "Equip a full set of mithril armour.", skills: { defence: 20 }, locations: [ LeagueLocations.Other ]  },
    { name: "1 Wintertodt Kill", task: "Help the pyromancers subdue the Wintertodt.", skills: { firemaking: 50 }, locations: [ LeagueLocations.Zeah ] }
  ];

  export const LeagueTaskArrayMedium: LeagueTask[] = [
    { name: "1000 Total Level", task: "Reach a total level of 1000.", skills: { overall: 1000 }, locations: [ LeagueLocations.Other ] },
    { name: "Enter the Woodcutting Guild", task: "Enter the Woodcutting Guild in Hosidius.", skills: { woodcutting: 60 }, locations: [ LeagueLocations.Zeah ]},
    { name: "Open 50 Grubby Chests", task: "Open the grubby chest in the Forthos Dungeon 50 times.", skills: { thieving: 57 }, locations: [ LeagueLocations.Zeah ]},
    { name: "Complete a Nechryael Task", task: "Receive and complete a Nechryael slayer task.", skills: { slayer: 77 }, locations: [ LeagueLocations.Morytania ] },
    { name: "Purchase Gricoller's Can", task: "Purchase Gricoller's can from the Tithe Farm minigame.", skills: { farming: 34 }, locations: [ LeagueLocations.Zeah ]}
  ];

  export const LeagueTaskArrayHard: LeagueTask[] = [
    { name: "Equip a Mist Battlestaff", task: "Obtain and equip a Mist battlestaff.", skills: { attack: 30, magic: 30 }, locations: [ LeagueLocations.Other ] },
    { name: "Equip the Angler's Outfit", task: "Equip a full set of the angler's outfit, purchased from Alry on Molch Island.", skills: { hunter: 35, fishing: 43 }, locations: [ LeagueLocations.Zeah ]},
    { name: "Equip Boots of Brimstone", task: "Obtain and equip a pair of Boots of brimstone.", skills: { slayer: 84, defence: 70, magic: 70, ranged: 70 }, locations: [ LeagueLocations.Other ] },
    { name: "Equip a Dragonfire Shield", task: "Obtain and equip a Dragonfire shield.", skills: { defence: 75, smithing: 90 }, locations: [ LeagueLocations.Other ] },
    { name: "Cast Resurrect Crops", task: "Cast the spell Resurrect Crops from the Arceuus spellbook.", skills: { magic: 78 }, locations: [ LeagueLocations.Other ] }
  ];

  export const LeagueTaskArrayElite: LeagueTask[] = [
    { name: "2000 Total Level", task: "Reach a total level of 2000.", skills: { overall: 2000 }, locations: [ LeagueLocations.Other ] }
  ];

  export const LeagueTaskArrayMaster: LeagueTask[] = [
    { name: "2277 Total Level", task: "Reach a total level of 2277.", skills: { overall: 2277 }, locations: [ LeagueLocations.Other ] }
  ];