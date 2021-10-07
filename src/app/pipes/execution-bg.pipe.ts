import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'executionBG'
})
export class ExecutionBGPipe implements PipeTransform {

  transform(value: string): string {
    var status : string;
    switch (value) {
      case '03':
        status = 'badge bg-success h-100';
        break;
      case '04':
        status = 'badge bg-danger h-100';
        break;
      case '07':
        status = 'badge bg-warning h-100';
        break;
      default:
        status = 'badge bg-secondary h-100';
        break;
    }
    return status;
  }

}
