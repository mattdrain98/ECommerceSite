import { Routes } from '@angular/router';
import { Home } from './home/home'; 
import { GamePage } from './game-page/game-page'; 

export const routes: Routes = [
    {path : '', component: Home},
    {path: 'search/:searchTerm', component: Home},
    {path: 'tag/:tag', component: Home}, 
    {path: 'game/:id', component: GamePage} 
];
