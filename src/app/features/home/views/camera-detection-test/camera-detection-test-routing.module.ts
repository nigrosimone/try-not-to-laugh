import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CameraDetectionTestComponent } from './camera-detection-test.component';

const routes: Routes = [
  {
    path: '',
    component: CameraDetectionTestComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CameraDetectionTestRoutingModule { }
