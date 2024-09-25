import { Routes } from '@angular/router';
import { MonsterListComponent } from './pages/monster-list/monster-list.component';
import { MonsterComponent } from './pages/monster/monster.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [{
    path:'',
    redirectTo:'home',
    pathMatch: 'full'    
},{
    path: 'monster',
    component: MonsterComponent
},{
    path: 'home',
    component: MonsterListComponent
},{
    path : '**',
    component: NotFoundComponent
}];
