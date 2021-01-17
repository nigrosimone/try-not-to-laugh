import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'select-game',
        pathMatch: 'full'
      },
      {
        path: 'select-game',
        loadChildren: () => import('./views/select-game/select-game.module').then(m => m.SelectGameModule)
      },
      {
        path: 'camera-detection',
        loadChildren: () => import('./views/camera-detection-test/camera-detection-test.module').then(m => m.CameraDetectionTestModule)
      },
      {
        path: 'arcade',
        loadChildren: () => import('./views/arcade/arcade.module').then(m => m.ArcadeModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
