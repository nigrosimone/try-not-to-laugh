import { ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WindowService } from 'src/app/core/services/window/windos.service';
import { safeUnsubscribe } from 'src/app/shared/utils/common';

@Component({
  selector: 'app-camera-detection-test',
  templateUrl: './camera-detection-test.component.html',
  styleUrls: ['./camera-detection-test.component.scss']
})
export class CameraDetectionTestComponent implements OnInit, OnDestroy {

  public width: number;
  public height: number;

  private subVwChanges: Subscription;

  constructor(
    private cdr: ChangeDetectorRef,
    private windowService: WindowService,
    private elRef: ElementRef) {
  }

  ngOnInit(): void {
    this.subVwChanges = this.windowService.viewPortChanges.subscribe(() => {
      this.doResize();
    });
  }

  ngOnDestroy(): void {
    safeUnsubscribe(this.subVwChanges);
  }

  onDetectionReady(): void {
    this.doResize();
  }

  doResize(): void {
    // -1 altrimenti esce la scrollbar
    const w = this.elRef.nativeElement.clientWidth - 1;
    const h = this.elRef.nativeElement.clientHeight - 1;

    if (w !== this.width || h !== this.height) {
      this.width = w;
      this.height = h;
      this.cdr.detectChanges();
    }
  }
}
