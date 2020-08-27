import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterType'
})
export class FilterPipe implements PipeTransform {

  transform(values: any[], type: string): any[] {

    



    /* values = values.filter(item => true); */

    values = values.filter(function (element) {
      

        if  (element.types[1] !== undefined && (element.types[0].type.name == type || element.types[1].type.name == type)){
          return true;
        }
        else if(element.types[0] !== undefined && (element.types[0].type.name == type)){
          return true;
        }
        else{
          return false;
        }
    });
    
    return values;

  }
  /* item.types[0].type.name === 'flying' */



}
