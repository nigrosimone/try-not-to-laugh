import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class WindowService implements OnDestroy {

    private viewPortSubject = new BehaviorSubject<boolean>(false);
    public readonly viewPortChanges = this.viewPortSubject.asObservable();

    private refResize = () => this.viewPortSubject.next(true);
    private refOrientationChange = () => this.viewPortSubject.next(true);

    constructor() {
        window.addEventListener('resize', this.refResize);
        window.addEventListener('orientationchange', this.refOrientationChange);
    }

    ngOnDestroy(): void {
        window.removeEventListener('resize', this.refResize);
        window.removeEventListener('orientationchange', this.refOrientationChange);
    }
}
