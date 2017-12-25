import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'select'
})
export class SelectPipe implements PipeTransform {

  transform(items: any, sel?: any): any {
    if (sel.name == '全部') {
      return items
    } else {
      return sel ? items.filter(sal => sal.CaseLocationDistrict === sel.name) : items;
    }
  }

}
