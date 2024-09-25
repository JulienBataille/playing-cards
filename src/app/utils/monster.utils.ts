export enum MonsterType {
    PLANT = "plant",
    ELECTRIC = "electric",
    FIRE = "fire",
    WATER = "water",
}

export interface ImonsterProperties{
    imageUrl: string;
    color: string;
}

export const MonsterTypeProperties: {[key: string]: ImonsterProperties} = {
    [MonsterType.PLANT]:{
        imageUrl: 'assets/img/grass.png',
        color: 'rgba(135,255,124)'
    },
    [MonsterType.ELECTRIC]:{
        imageUrl: 'assets/img/electric.png',
        color: 'rgba(255,255,104)'
    },
    [MonsterType.FIRE]:{
        imageUrl: 'assets/img/fire.png',
        color: 'rgba(255,104,104)'
    },
    [MonsterType.WATER]:{
        imageUrl: 'assets/img/water.png',
        color: 'rgba(118,234,255)'
    }
}