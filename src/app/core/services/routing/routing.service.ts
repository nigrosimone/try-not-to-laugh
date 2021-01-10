import { Injectable } from '@angular/core';
import { Router } from '@angular/router';



@Injectable({ providedIn: 'root' })
export class RoutingService {

    private baseURL = document.location.hostname === 'github.com' ? 'try-not-to-laugh-frontend' : '';

    constructor(private route: Router) { }

    home(): Promise<boolean> {
        return this.route.navigateByUrl(`${this.baseURL}/`);
    }

    login(): Promise<boolean> {
        return this.route.navigateByUrl(`${this.baseURL}/login`);
    }

    demo(): Promise<boolean> {
        return this.route.navigateByUrl(`${this.baseURL}/demo`);
    }

    demoCameraDetection(): Promise<boolean> {
        return this.route.navigateByUrl(`${this.baseURL}/demo/camera-detection`);
    }
}
