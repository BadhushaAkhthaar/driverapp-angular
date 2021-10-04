import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'execution',
})
export class ExecutionPipe implements PipeTransform {
  transform(value: string): string {
    var status = "";
    switch (value) {
      case '03':
        status = 'Execution';
        break;
      case '04':
        status = 'Completed';
        break;
      case '07':
        status = 'Ready';
        break;
      default:
        status = "Nan"
        break;
    }
    return status;
  }
}
