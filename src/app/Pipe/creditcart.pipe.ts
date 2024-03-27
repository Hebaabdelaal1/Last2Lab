import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditcart',
  standalone: true
})
export class CreditcartPipe implements PipeTransform {

  transform(creditnumber: string): string {
    if ( creditnumber &&creditnumber.length === 14){
    let num= creditnumber.replace(/(.{4})/g, '$1 - ');
    return num;
    }
    else {
      return 'Invalid credit card number';
    }
  }

}
