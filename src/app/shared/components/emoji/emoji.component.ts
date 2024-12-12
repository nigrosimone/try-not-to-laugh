import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export interface Emoji {
  like: boolean;
  love: boolean;
  haha: boolean;
  yay: boolean;
  wow: boolean;
  sad: boolean;
  angry: boolean;
}

@Component({
    selector: 'app-emoji',
    templateUrl: './emoji.component.html',
    styleUrls: ['./emoji.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmojiComponent {

  readonly emojiEnabled = input<Emoji>(null);
  readonly emojiHighlight = input<keyof Emoji>(null);
}
