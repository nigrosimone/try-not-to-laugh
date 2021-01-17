import { HostListener, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class WindowService {

    private viewPortSubject: Subject<boolean>;
    public readonly viewPortChanges: Observable<boolean>;

    constructor() {
        this.viewPortSubject = new BehaviorSubject<boolean>(false);
        this.viewPortChanges = this.viewPortSubject.asObservable();
    }

    @HostListener('window:resize')
    onResize(): void {
        this.viewPortSubject.next(true);
    }

    @HostListener('window:orientationchange')
    onOrientationChange(): void {
        this.viewPortSubject.next(true);
    }
}
