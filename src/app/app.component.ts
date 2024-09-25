import { Component, computed, effect, model, signal } from '@angular/core';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { Monster } from './models/monster.model';
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { MonsterType } from './utils/monster.utils';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,PlayingCardComponent, SearchBarComponent],
  templateUrl: "./app.component.html",
  styleUrl :"./app.component.css"

})
export class AppComponent {

  monsters!: Monster[];
  search = model('');

  filteredMonsters = computed(()=>{
    return this.monsters.filter(monster => monster.name.includes(this.search()))
  })


  constructor(){

    this.monsters = [];

    const monster1 = new Monster();
    monster1.name ="bulbizarre";
    monster1.hp = 40;
    monster1.figureCaption ="N°001 Bulbizarre";
    this.monsters.push(monster1)

    const monster2 = new Monster();
    monster2.name ="carapuce";
    monster2.image= 'assets/img/carapuce.png';
    monster2.type = MonsterType.WATER
    monster2.hp = 30;
    monster2.figureCaption ="N°002 Carapuce";
    this.monsters.push(monster2)

    const monster3 = new Monster();
    monster3.name ="pikachu";
    monster3.image= 'assets/img/pikachu.png';
    monster3.type = MonsterType.ELECTRIC
    monster3.hp = 30;
    monster3.figureCaption ="N°003 Pikachu";
    this.monsters.push(monster3)

    const monster4 = new Monster();
    monster4.name ="salameche";
    monster4.image= 'assets/img/salameche.png';
    monster4.type = MonsterType.FIRE
    monster4.hp = 30;
    monster4.figureCaption ="N°004 Salameche";
    this.monsters.push(monster4)

  }

}
