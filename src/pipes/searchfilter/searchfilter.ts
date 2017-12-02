import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SearchfilterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'searchfilter',
})
export class SearchfilterPipe implements PipeTransform {
  /**
   * @items = object from array
   * @term = term's search
   */  
  transform(items: any, term: any): any {
    if (term === undefined) return items
    return items.filter(function(item) {
      for(let property in item){
        if (item[property] === null){
          continue;
        }
        if(item[property].toString().toLowerCase().includes(term.toLowerCase())){
          return true;
        }
      }
      return false;
    });
  }
}
