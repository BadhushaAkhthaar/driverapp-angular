import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customdate'
})
export class CustomdatePipe implements PipeTransform {

  transform(value: string): string {
    return `${value.slice(6,8)}-${value.slice(4,6)}-${value.slice(0,4)}`;
  }

}
