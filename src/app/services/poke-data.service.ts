import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface Pokemons {
  name: string;
  types: [];
}


@Injectable({
  providedIn: 'root'
})

/* this class contains methods to extract data from pokeapi.co database */
export class PokeDataService {
  pokeList: Pokemons[];
  requestURL

  constructor(private http : HttpClient) { }

  /* Returns list of pokemonTypes */
  fillTypeList(){
    return this.http.get('https://pokeapi.co/api/v2/type/')
  }

  fillPokemonList(){
    return fetch('https://pokeapi.co/api/v2/pokemon?limit=3000')
  }

  getPokemonByID( url: any){

    return fetch(url);
  }

  

}




