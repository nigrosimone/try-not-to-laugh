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
  protected readonly emojiEnabled = input<Emoji>({
    like: false,
    love: false,
    haha: false,
    yay: false,
    wow: false,
    sad: false,
    angry: false,
  });
  protected readonly emojiHighlight = input<keyof Emoji>(null);
}
