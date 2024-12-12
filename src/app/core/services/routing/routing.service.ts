import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class RoutingService {
    private route = inject(Router);

    root(): Promise<boolean> {
        return this.route.navigateByUrl(`/`);
    }

    login(): Promise<boolean> {
        return this.route.navigateByUrl(`/login`);
    }

    home(): Promise<boolean> {
        return this.route.navigateByUrl(`/home`);
    }

    homeCameraDetection(): Promise<boolean> {
        return this.route.navigateByUrl(`/home/camera-detection`);
    }

    homeArcade(): Promise<boolean> {
        return this.route.navigateByUrl(`/home/arcade`);
    }

    homeExpressionTraining(): Promise<boolean> {
        return this.route.navigateByUrl(`/home/expression-training`);
    }

    homeEmojiDetection(): Promise<boolean> {
        return this.route.navigateByUrl(`/home/emoji-detection`);
    }
}
