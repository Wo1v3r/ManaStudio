import { Item } from "./item";
import { Skill } from "./skill";

export class Avatar{
    id: number;
    name: string;
    inventory: Item[];
    type: string;
    skills: Skill[];
    proficencies:number[];
    money:number;
}