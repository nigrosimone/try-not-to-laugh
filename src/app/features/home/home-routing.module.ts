import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'camera-detection',
        loadChildren: () => import('./views/camera-detection/camera-detection.module').then(m => m.CameraDetectionModule)
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
