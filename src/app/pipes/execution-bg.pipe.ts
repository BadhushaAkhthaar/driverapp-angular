import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'executionBG'
})
export class ExecutionBGPipe implements PipeTransform {

  transform(value: string): string {
    var status : string;
    switch (value) {
      case '03':
        status = 'informative';
        break;
      case '04':
        status = 'positive';
        break;
      case '07':
        status = 'negative';
        break;
      default:
        status = "critical"
        break;
    }
    return status;
  }

}
