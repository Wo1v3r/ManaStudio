import { Item } from "./item";

export class Avatar{
    id: number;
    name: string;
    inventory: Item[];
    type: string;
    skills: {id:number,proficency:number}[]

}