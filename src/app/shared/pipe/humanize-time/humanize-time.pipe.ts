import { Pipe, PipeTransform } from '@angular/core';
import humanizeDuration from 'humanize-duration';

const config = { language: 'it' };

@Pipe({ name: 'humanizeTime' })
export class HumanizeTimePipe implements PipeTransform {
  transform(value: number): string {
    return humanizeDuration(value, config);
  }
}
