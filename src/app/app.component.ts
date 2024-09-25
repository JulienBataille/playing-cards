import { Component, computed, effect, signal } from '@angular/core';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { Monster } from './models/monster.model';
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { MonsterType } from './utils/monster.utils';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PlayingCardComponent, SearchBarComponent],
  templateUrl: "./app.component.html",
  styleUrl :"./app.component.css"

})
export class AppComponent {

  monsters!: Monster[];
  count: number = 0;
  search = '';

  selectedMonsterIndex = signal(1);
  selectedMonster = computed(()=>{
    return this.monsters[this.selectedMonsterIndex()]
  })

  constructor(){

    effect(()=>{
      console.log(this.selectedMonster())
    })

    this.monsters = [];

    const monster1 = new Monster();
    monster1.name ="Bulbizarre";
    monster1.hp = 40;
    monster1.figureCaption ="N°001 Bulbizarre";
    this.monsters.push(monster1)

    const monster2 = new Monster();
    monster2.name ="Carapuce";
    monster2.image= 'assets/img/carapuce.png';
    monster2.type = MonsterType.WATER
    monster2.hp = 30;
    monster2.figureCaption ="N°002 Carapuce";
    this.monsters.push(monster2)

    const monster3 = new Monster();
    monster3.name ="Pikachu";
    monster3.image= 'assets/img/pikachu.png';
    monster3.type = MonsterType.ELECTRIC
    monster3.hp = 30;
    monster3.figureCaption ="N°003 Pikachu";
    this.monsters.push(monster3)

    const monster4 = new Monster();
    monster4.name ="Salameche";
    monster4.image= 'assets/img/salameche.png';
    monster4.type = MonsterType.FIRE
    monster4.hp = 30;
    monster4.figureCaption ="N°004 Salameche";
    this.monsters.push(monster4)

  }

  increasedCount(){
    this.count ++
  }

  toggleMonster(){
    this.selectedMonsterIndex.set((this.selectedMonsterIndex() + 1) % this.monsters.length)
  }
}
