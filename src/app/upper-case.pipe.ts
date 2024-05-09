import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperCase'
})
export class UpperCasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if (!value) return ''; // Return empty string if input is null or undefined
    
    // Convert string to uppercase
    return value.toUpperCase();
  }

}
