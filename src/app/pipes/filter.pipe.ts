import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterType'
})
export class FilterPipe implements PipeTransform {

  transform(values: any[], type: string, checkForCaught: boolean): any[] {

    /* check for caught flag, if requested */
    if (checkForCaught){
      values = values.filter(function (element) {
         return element.caught;
      });
    };

    /* Filters list of pokemons depending on their type*/
    /* If pokemon has 2 types check if any is equal to type*/
    /* If pokemon has 1 types check if it is equal to type*/
    /* else false */

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
    console.log("meg itt", values)
    
    return values;

    }
  



}
