import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customTime'
})
export class CustomTimePipe implements PipeTransform {

  transform(value: number): unknown {
    const minutes = 60 * (value-Math.floor(value));
    return `${Math.floor(value)}h ` + (minutes == 0 ? '' : `${minutes}min`);
  }

}
