import { Pipe , PipeTransform } from '@angular/core';
import {copy} from "fs-extra";

@Pipe({
  name: 'sort'
})
/**
 *  this sort pipi is only implemented for sorting of posts, therefore the implementation is not general.
 */
export class MySortPipe implements PipeTransform {

 public transform(array: any[], sortField: string, sortOrder : string): any[] {

    if(array == null){
     return array;
    }
    //the origianal array is readonly, therefore it makes a copy for sorting.
    var nArray = array.slice();
    var first = 1;
    var second = -1;

    if(sortOrder ==='arrow up'){
      first = -1;
      second = 1;
    }
    if(sortField === 'length'){
      nArray.sort((a, b) => {
          return a['content'].toString().length < b['content'].toString().length ? first : second;
        }
      );
    }else {
      nArray.sort((a, b) => {
          return a[sortField].toLowerCase() < b[sortField].toLowerCase() ? first : second;
        }
      );
    }
    return nArray;
  }
}
