import { AfterViewInit, ChangeDetectionStrategy, Component, DestroyRef, ElementRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from "@angular/core/rxjs-interop"
import { WindowService } from 'src/app/core/services/window/windos.service';
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
    this.windowService.viewPortChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.doResize();
    });
  }

  onDetectionReady(): void {
    this.doResize();
  }

  doResize(): void {
    // -1 altrimenti esce la scrollbar
    this.width.set(this.elRef.nativeElement.clientWidth - 1);
    this.height.set(this.elRef.nativeElement.clientHeight - 1);
  }
}


