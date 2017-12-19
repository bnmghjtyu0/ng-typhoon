import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'select'
})
export class SelectPipe implements PipeTransform {

  transform(items: any, sel?: any): any {
    return sel ? items.filter(sal => sal.Name === sel) : items;
  }

}
