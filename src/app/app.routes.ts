import { Routes } from '@angular/router';
import { Home } from './home/home'; // Assuming you have a Home component

export const routes: Routes = [
    {path : '', component: Home},
    {path: 'search/:searchTerm', component: Home},
    {path: 'tag/:tag', component: Home}
];
