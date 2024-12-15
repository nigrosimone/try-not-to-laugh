import { ChangeDetectionStrategy, Component, input, output, viewChild } from '@angular/core';
import { YouTubePlayer, YouTubePlayerModule, YOUTUBE_PLAYER_CONFIG } from '@angular/youtube-player';

const PLAYER_VARS = {
  autoplay: 0,
  controls: 0,
  showinfo: 0,
  modestbranding: 1,
  rel: 0,
  enablejsapi: 0,
  origin: location.href,
  widget_referrer: location.href
};

@Component({
  selector: 'app-youtube-player-wrapper',
  templateUrl: './youtube-player-wrapper.component.html',
  styleUrls: ['./youtube-player-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [YouTubePlayerModule],
  providers: [{
    provide: YOUTUBE_PLAYER_CONFIG,
    useValue: {
      loadApi: false
    }
  }]
})
export class YoutubePlayerWrapperComponent {

  protected readonly youtube = viewChild<YouTubePlayer>('youtube');

  protected readonly videoId = input<string>(undefined);
  protected readonly seek = input<number>(undefined);
  protected readonly width = input<number>(undefined);
  protected readonly height = input<number>(undefined);

  protected readonly stateChange = output<YT.OnStateChangeEvent>();
  protected readonly ready = output<YT.PlayerEvent>();

  // impostazioni del player di youtube
  protected readonly playerVars = PLAYER_VARS;

  private seekChecked = false;
  private seekApplied = false;

  /**
   * Evento di cambiamento di stato del player di YouTube
   */
  protected onStateChange(e: YT.OnStateChangeEvent): void {
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
  public pauseVideo(): void {
    this.youtube().pauseVideo();
  }

  /**
   * Mette in play la webcam
   */
  public playVideo(): void {
    this.youtube().playVideo();
  }

  /**
   * Ferma il video
   */
  public stopVideo(): void {
    this.youtube().stopVideo();
  }

  /**
   * Torna i secondi visualizzati del video
   */
  public getCurrentTime(): number {
    return this.youtube().getCurrentTime();
  }

  /**
   * Torna i secondi visualizzati del video come intero
   */
  public getCurrentTimeInt(): number {
    return Math.floor(this.getCurrentTime());
  }

  /**
   * Torna i secondi visualizzati del video come intero meno i secondi del seek
   */
  public getCurrentTimeIntSeeked(): number {
    let time = this.getCurrentTimeInt();
    if (this.seekApplied) {
      time -= this.seek();
    }
    return time;
  }
}
