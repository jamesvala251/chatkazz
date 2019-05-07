import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderPipe'
})
export class GenderPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value === 'm') {
      return 'Male';
    } else if (value === 'f') {
      return 'Female';
    } else {
      return '';
    }
  }

}
