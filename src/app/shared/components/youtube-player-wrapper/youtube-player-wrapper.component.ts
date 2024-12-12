import { ChangeDetectionStrategy, Component, input, output, viewChild } from '@angular/core';
import { YouTubePlayer, YouTubePlayerModule } from '@angular/youtube-player';


@Component({
  selector: 'app-youtube-player-wrapper',
  templateUrl: './youtube-player-wrapper.component.html',
  styleUrls: ['./youtube-player-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [YouTubePlayerModule],
  standalone: true
})
export class YoutubePlayerWrapperComponent {

  readonly youtube = viewChild<YouTubePlayer>('youtube');

  readonly videoId = input<string>(undefined);
  readonly seek = input<number>(undefined);
  readonly width = input<number>(undefined);
  readonly height = input<number>(undefined);

  readonly stateChange = output<YT.OnStateChangeEvent>();
  readonly ready = output<YT.PlayerEvent>();

  private seekChecked = false;
  private seekApplied = false;

  // impostazioni del player di youtube
  public playerVars = {
    autoplay: 0,
    controls: 0,
    showinfo: 0,
    modestbranding: 1,
    rel: 0,
    enablejsapi: 0,
    origin: location.href,
    widget_referrer: location.href
  }

  /**
   * Evento di cambiamento di stato del player di YouTube
   */
  onStateChange(e: YT.OnStateChangeEvent): void {
    if (e.data === 1) {
      if (!this.seekApplied && !this.seekChecked && this.seek() > 0) {
        this.seekChecked = true;
        if (this.seek() < this.youtube().getDuration()) {
          this.youtube().seekTo(this.seek(), true);
          this.seekApplied = true;
        }
      }
    }
    this.stateChange.emit(e);
  }

  /**
   * Mette in pausa la webcam
   */
  pauseVideo(): void {
    this.youtube().pauseVideo();
  }

  /**
   * Mette in play la webcam
   */
  playVideo(): void {
    this.youtube().playVideo();
  }

  /**
   * Ferma il video
   */
  stopVideo(): void {
    this.youtube().stopVideo();
  }

  /**
   * Torna i secondi visualizzati del video
   */
  getCurrentTime(): number {
    return this.youtube().getCurrentTime();
  }

  /**
   * Torna i secondi visualizzati del video come intero
   */
  getCurrentTimeInt(): number {
    return Math.floor(this.getCurrentTime());
  }

  /**
   * Torna i secondi visualizzati del video come intero meno i secondi del seek
   */
  getCurrentTimeIntSeeked(): number {
    let time = this.getCurrentTimeInt();
    if (this.seekApplied) {
      time = time - this.seek();
    }
    return time;
  }
}
