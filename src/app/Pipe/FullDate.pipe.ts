import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fulldate',
  standalone: true
})
export class FullDate implements PipeTransform {

  transform(idNumber: string, datePart: string): string {
    let year = idNumber.slice(1, 3);
    let month = idNumber.slice(3, 5);
    let day = idNumber.slice(5, 7);

    switch (datePart) {
      case 'YY':
        return year;
      case 'MM':
        return month;
      case 'DD':
        return day;
      case 'FullDate':
        return `${day}-${month}-19${year}`;
      default:
        return 'Invalid date';
    }
  }

}
