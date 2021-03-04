import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCustomDate'
})
export class MyCustomDatePipe implements PipeTransform {

  transform(dateString: string): unknown {
    const dateParts = dateString.split("/");
    return dateParts[2] + '/' + dateParts[1] + '/' + dateParts[0];
  }

}
