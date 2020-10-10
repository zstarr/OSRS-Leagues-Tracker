import { LeagueLocations } from './league-locations.model';
import { LeagueTask } from "./league-tasks.model";

export const LeagueTaskArrayEasy: LeagueTask[] = [
    { id: 0, name: "Client of Kourend", task: "Complete the quest \"Client of Kourend\".", skills: { other: "See quest page." }, location: LeagueLocations.Zeah  },
    { id: 1, name: "Complete a Banshee Task", task: "Receive and complete a Banshee slayer task.", skills: { slayer: 15 }, location: LeagueLocations.Morytania },
    { id: 2, name: "Steal a Golovanova Fruit Top", task: "Steal a Golovanova fruit top from a fruit stall in Hosidius.", skills: { thieving: 25 }, location: LeagueLocations.Zeah  },
    { id: 3, name: "Equip Tier 5 Shayzien Armour", task: "Equip a full set of mithril armour.", skills: { defence: 20 }, location: null  },
    { id: 4, name: "1 Wintertodt Kill", task: "Help the pyromancers subdue the Wintertodt.", skills: { firemaking: 50 }, location: LeagueLocations.Zeah  }
  ];

  export const LeagueTaskArrayMedium: LeagueTask[] = [
    { id: 1000, name: "1000 Total Level", task: "Reach a total level of 1000.", skills: { overall: 1000 }, location: null },
    { id: 1001, name: "Enter the Woodcutting Guild", task: "Enter the Woodcutting Guild in Hosidius.", skills: { woodcutting: 60 }, location: LeagueLocations.Zeah },
    { id: 1002, name: "Open 50 Grubby Chests", task: "Open the grubby chest in the Forthos Dungeon 50 times.", skills: { thieving: 57 }, location: LeagueLocations.Zeah },
    { id: 1003, name: "Complete a Nechryael Task", task: "Receive and complete a Nechryael slayer task.", skills: { slayer: 77 }, location: LeagueLocations.Morytania },
    { id: 1004, name: "Purchase Gricoller's Can", task: "Purchase Gricoller's can from the Tithe Farm minigame.", skills: { farming: 34 }, location: LeagueLocations.Zeah }
  ];

  export const LeagueTaskArrayHard: LeagueTask[] = [
    { id: 2000, name: "Equip a Mist Battlestaff", task: "Obtain and equip a Mist battlestaff.", skills: { attack: 30, magic: 30 }, location: null },
    { id: 2001, name: "Equip the Angler's Outfit", task: "Equip a full set of the angler's outfit, purchased from Alry on Molch Island.", skills: { hunter: 35, fishing: 43 }, location: LeagueLocations.Zeah },
    { id: 2002, name: "Equip Boots of Brimstone", task: "Obtain and equip a pair of Boots of brimstone.", skills: { slayer: 84, defence: 70, magic: 70, ranged: 70 }, location: null },
    { id: 2003, name: "Equip a Dragonfire Shield", task: "Obtain and equip a Dragonfire shield.", skills: { defence: 75, smithing: 90 }, location: null },
    { id: 2004, name: "Cast Resurrect Crops", task: "Cast the spell Resurrect Crops from the Arceuus spellbook.", skills: { magic: 78 }, location: null }
  ];

  export const LeagueTaskArrayElite: LeagueTask[] = [
    { id: 3000, name: "2000 Total Level", task: "Reach a total level of 2000.", skills: { overall: 2000 }, location: null },
    { id: 3001, name: "Equip an Eternal Slayer Ring", task: "Craft and equip an Eternal slayer ring.", skills: { crafting: 75 }, location: null },
    { id: 3002, name: "Equip an Dragon Hunter Lance", task: "Obtain and equip a Dragon Huntert Lance.", skills: { attack: 70, slayer: 95 }, location: null }
  ];

  export const LeagueTaskArrayMaster: LeagueTask[] = [
    { id: 4000, name: "2277 Total Level", task: "Reach a total level of 2277.", skills: { overall: 2277 }, location: null },
    { id: 4001, name: "Equip a Golden Tench", task: "Equip a Golden tench, caught by aerial fishing on Molch Island.", skills: { hunter: 35, fishing: 43 }, location: null },
    { id: 4002, name: "Equip a Kodai Wand", task: "Obtain and equip a Kodai wand.", skills: { magic: 75 }, location: null }
  ];