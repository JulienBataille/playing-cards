import { MonsterType } from "../utils/monster.utils";

export class Monster{
    name:string ="My Monster";
    image: string = "assets/img/bulb.png";
    type: MonsterType = MonsterType.PLANT;
    hp: number = 40;
    figureCaption:string = "N°001 Monster";
    attackName:string = "Geo Impact";
    attackStrength: number = 60;
    attackDescription:string = "This is a long description of a monster capacity Probably something to do with grass."
}