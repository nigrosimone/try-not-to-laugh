import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';
import { loadYouTubeApiScript } from '../../utils/youtube-api';


@Component({
  selector: 'app-youtube-player-wrapper',
  templateUrl: './youtube-player-wrapper.component.html',
  styleUrls: ['./youtube-player-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YoutubePlayerWrapperComponent implements OnInit {

  @ViewChild('youtube', { static: false }) youtube: YouTubePlayer;

  @Input() videoId: string;
  @Input() seek: number;
  @Input() width: number;
  @Input() height: number;

  @Output() stateChange: EventEmitter<YT.OnStateChangeEvent> = new EventEmitter<YT.OnStateChangeEvent>();
  @Output() ready: EventEmitter<YT.PlayerEvent> = new EventEmitter<YT.PlayerEvent>();

  private seekChecked = false;
  private seekApplied = false;

  // impostazioni del player di youtube
  public playerVars: YT.PlayerVars = {
    autoplay: YT.AutoPlay.NoAutoPlay,
    controls: YT.Controls.Hide,
    showinfo: YT.ShowInfo.Hide,
    modestbranding: YT.ModestBranding.Modest,
    rel: YT.RelatedVideos.Hide
  };

  ngOnInit(): void {
    // carichiamo lo script delle API di youtube
    loadYouTubeApiScript();
  }

  /**
   * Evento di cambiamento di stato del player di YouTube
   */
  onStateChange(e: YT.OnStateChangeEvent): void {
    if (e.data === YT.PlayerState.PLAYING) {
      if (!this.seekApplied && !this.seekChecked && this.seek > 0) {
        this.seekChecked = true;
        if (this.seek < this.youtube.getDuration()) {
          this.youtube.seekTo(this.seek, true);
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
    this.youtube.pauseVideo();
  }

  /**
   * Mette in play la webcam
   */
  playVideo(): void {
    this.youtube.playVideo();
  }

  /**
   * Ferma il video
   */
  stopVideo(): void {
    this.youtube.stopVideo();
  }

  /**
   * Torna i secondi visualizzati del video
   */
  getCurrentTime(): number {
    return this.youtube.getCurrentTime();
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
      time = time - this.seek;
    }
    return time;
  }
}
