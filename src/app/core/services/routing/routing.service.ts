import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class RoutingService {
    private route = inject(Router);

    home(): Promise<boolean> {
        return this.navigateByUrl(`/`);
    }

    homeCameraDetection(): Promise<boolean> {
        return this.navigateByUrl(`/camera-detection`);
    }

    homeArcade(): Promise<boolean> {
        return this.navigateByUrl(`/arcade`);
    }

    homeExpressionTraining(): Promise<boolean> {
        return this.navigateByUrl(`/expression-training`);
    }

    homeEmojiDetection(): Promise<boolean> {
        return this.navigateByUrl(`/emoji-detection`);
    }

    private navigateByUrl(url: string): Promise<boolean> {
        return this.route.navigateByUrl(url, { skipLocationChange: true });
    }
}
