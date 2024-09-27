import { Injectable } from '@angular/core';
import { Monster } from '../../models/monster.model';
import { MonsterType } from '../../utils/monster.utils';

@Injectable({
	providedIn: 'root'
})
export class MonsterService {

	monsters: Monster[] = [];
	currentId: number = 1;

	constructor() {
		this.load();
	}

	private save() {
		localStorage.setItem('monsters', JSON.stringify(this.monsters));
	}

	private load() {
		const monstersData = localStorage.getItem('monsters');
		if (monstersData) {
			this.monsters = JSON.parse(monstersData).map((monsterJson: any) => Object.assign(new Monster(), monsterJson));
			this.currentId = Math.max(...this.monsters.map(monster => monster.id)) + 1;
		} else {
			this.init();
			this.save();
		}
	}

	private init() {

		this.monsters = [];

		const monster1 = new Monster();
		monster1.id = this.currentId;
		monster1.name = "Pikachu";
		monster1.image = "assets/img/pikachu.png";
		monster1.type = MonsterType.ELECTRIC;
		monster1.hp = 40;
		monster1.figureCaption = "N°002 Pikachu";
		this.monsters.push(monster1);
		this.currentId++;

		const monster2 = new Monster();
		monster2.id = this.currentId;
		monster2.name = "carapuce";
		monster2.image = "assets/img/carapuce.png";
		monster2.type = MonsterType.WATER;
		monster2.hp = 60;
		monster2.figureCaption = "N°003 carapuce";
		this.monsters.push(monster2);
		this.currentId++;

		const monster3 = new Monster();
		monster3.id = this.currentId;
		monster3.name = "bulbizarre";
		monster3.image = "assets/img/bulb.png";
		monster3.type = MonsterType.PLANT;
		monster3.hp = 60;
		monster3.figureCaption = "N°004 Bubulbizarrelb";
		this.monsters.push(monster3);
		this.currentId++;

		const monster4 = new Monster();
		monster4.id = this.currentId;
		monster4.name = "salameche";
		monster4.image = "assets/img/salameche.png";
		monster4.type = MonsterType.FIRE;
		monster4.hp = 60;
		monster4.figureCaption = "N°005 salameche";
		this.monsters.push(monster4);
		this.currentId++;
	}

	getAll() {
		return this.monsters.map(monster => monster.copy());
	}

	get(id: number): Monster | undefined {
		const monster = this.monsters.find(monster => monster.id === id)
		return monster ? monster.copy() : undefined;
	}

	add(monster: Monster): Monster {
		const monsterCopy = monster.copy()

		monsterCopy.id = this.currentId;
		this.monsters.push(monsterCopy.copy());
		this.save();

		this.currentId++;

		return monsterCopy;
	}

	update(monster: Monster): Monster {
		const monsterCopy = monster.copy();

		const monsterIndex = this.monsters.findIndex(monster => monster.id === monsterCopy.id);
		if (monsterIndex !== -1) {
			this.monsters[monsterIndex] = monsterCopy.copy();
			this.save();
		}

		return monsterCopy;
	}

	delete(id: number) {
		const monsterIndex = this.monsters.findIndex(monster => monster.id === id);
		if (monsterIndex !== -1) {
			this.monsters.splice(monsterIndex, 1);
			this.save();
		}
	}

}