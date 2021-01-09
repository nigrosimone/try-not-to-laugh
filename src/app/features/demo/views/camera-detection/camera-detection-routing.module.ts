import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CameraDetectionComponent } from './camera-detection.component';

const routes: Routes = [
  {
    path: '',
    component: CameraDetectionComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CameraDetectionRoutingModule { }
