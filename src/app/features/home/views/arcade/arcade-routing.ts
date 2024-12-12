import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./arcade.component').then(m => m.ArcadeComponent)
  },
];
