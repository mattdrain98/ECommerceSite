import { Routes } from '@angular/router';
import { Home } from './home/home'; 
import { GamePage } from './game-page/game-page'; 
import { CartPage } from './cart-page/cart-page';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'search/:searchTerm', component: Home },
    { path: 'tag/:tag', component: Home },
    { path: 'game/:id', component: GamePage },
    { path: 'cart-page', component: CartPage }
];