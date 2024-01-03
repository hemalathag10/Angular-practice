// date-format.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'customDateFormat'
})
export class CustomDateFormatPipe implements PipeTransform {
  transform(value: any, format: string = 'mediumDate'): any {
    const datePipe = new DatePipe('en-US');
    return datePipe.transform(value, format);
  }
}
