import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home.component').then(m => m.HomeComponent),
    children: [
      {
        path: '',
        loadChildren: () => import('./views/select-game/select-game-routing').then(m => m.routes)
      },
      {
        path: 'camera-detection',
        loadChildren: () => import('./views/camera-detection-test/camera-detection-test-routing').then(m => m.routes)
      },
      {
        path: 'arcade',
        loadChildren: () => import('./views/arcade/arcade-routing').then(m => m.routes)
      },
      {
        path: 'expression-training',
        loadChildren: () => import('./views/expression-training/expression-training-routing').then(m => m.routes)
      },
      {
        path: 'emoji-detection',
        loadChildren: () => import('./views/emoji-detection/emoji-detection-routing').then(m => m.routes)
      }
    ]
  }
];

