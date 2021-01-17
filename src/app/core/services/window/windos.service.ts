import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class WindowService {

    private viewPortSubject: Subject<boolean>;
    public readonly viewPortChanges: Observable<boolean>;

    constructor() {
        this.viewPortSubject = new BehaviorSubject<boolean>(false);
        this.viewPortChanges = this.viewPortSubject.asObservable();

        window.addEventListener('resize', () => this.viewPortSubject.next(true));
        window.addEventListener('orientationchange', () => this.viewPortSubject.next(true));
    }
}
