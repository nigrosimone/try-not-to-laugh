import { AfterViewInit, ChangeDetectionStrategy, Component, DestroyRef, ElementRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from "@angular/core/rxjs-interop"
import { WindowService } from 'src/app/core/services/window/window.service';
import { CameraDetectionComponent } from '../../../../shared/components/camera-detection/camera-detection.component';

@Component({
  selector: 'app-camera-detection-test',
  templateUrl: './camera-detection-test.component.html',
  styleUrls: ['./camera-detection-test.component.scss'],
  imports: [CameraDetectionComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CameraDetectionTestComponent implements AfterViewInit {
  private destroyRef = inject(DestroyRef);
  private windowService = inject(WindowService);
  private elRef = inject(ElementRef);

  public width = signal<number>(0);
  public height = signal<number>(0);


  ngAfterViewInit(): void {
    this.windowService.forEl(this.elRef).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(({ clientWidth, clientHeight }) => {
      // -1 altrimenti esce la scrollbar
      this.width.set(clientWidth - 1);
      this.height.set(clientHeight - 1);
    });
  }
}


