import { Pipe, PipeTransform } from '@angular/core';
import humanizeDuration from 'humanize-duration';


@Pipe({ name: 'humanizeTime' })
export class HumanizeTimePipe implements PipeTransform {
  transform(value: number): string {
    return humanizeDuration(value, { language: 'it' });
  }
}
