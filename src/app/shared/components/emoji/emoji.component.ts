import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

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

  @Input() emojiEnabled: Emoji = null;
  @Input() emojiHighlight: keyof Emoji = null;
}
