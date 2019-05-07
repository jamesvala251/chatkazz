import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'libphonenumber-js';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value, args?: string): any {
    if (!value) {
      return value;
    }
    return format(value, 'US', 'National');
  }

}
