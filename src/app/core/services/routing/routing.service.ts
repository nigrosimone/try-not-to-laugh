import { Injectable } from '@angular/core';
import { Router } from '@angular/router';



@Injectable({ providedIn: 'root' })
export class RoutingService {

    private baseURL = document.location.hostname === 'github.com' ? 'try-not-to-laugh-frontend' : '';

    constructor(private route: Router) { }

    root(): Promise<boolean> {
        return this.route.navigateByUrl(`${this.baseURL}/`);
    }

    login(): Promise<boolean> {
        return this.route.navigateByUrl(`${this.baseURL}/login`);
    }

    home(): Promise<boolean> {
        return this.route.navigateByUrl(`${this.baseURL}/home`);
    }

    homeCameraDetection(): Promise<boolean> {
        return this.route.navigateByUrl(`${this.baseURL}/home/camera-detection`);
    }

    homeArcade(): Promise<boolean> {
        return this.route.navigateByUrl(`${this.baseURL}/home/arcade`);
    }

    homeExpressionTraining(): Promise<boolean> {
        return this.route.navigateByUrl(`${this.baseURL}/home/expression-training`);
    }

    homeEmojiDetection(): Promise<boolean> {
        return this.route.navigateByUrl(`${this.baseURL}/home/emoji-detection`);
    }
}
