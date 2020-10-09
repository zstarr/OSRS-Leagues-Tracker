import { LeagueLocations } from "./league-locations.model";
export interface LeagueTask {
    id: number;
    name: string;
    task: string;
    skills: SkillData;
    locations: LeagueLocations[];
}

export interface SkillData {
    other?: string;
    attack?: number;
    defence?: number;
    strength?: number;
    hitpoints?: number;
    ranged?: number;
    prayer?: number;
    magic?: number;
    cooking?: number;
    woodcutting?: number;
    fletching?: number;
    fishing?: number;
    firemaking?: number;
    crafting?: number;
    smithing?: number;
    mining?: number;
    herblore?: number;
    agility?: number;
    thieving?: number;
    slayer?: number;
    farming?: number;
    runecraft?: number;
    hunter?: number;
    construction?: number;
    overall?: number;
}
