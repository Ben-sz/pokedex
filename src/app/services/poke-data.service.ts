import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

/* this class contains methods to extract data from pokeapi.co database */
export class PokeDataService {

  constructor(private http : HttpClient) { }



  /* Returns list of pokemonTypes */
  fillTypeList(){
    return this.http.get('https://pokeapi.co/api/v2/type/')
  }


}




