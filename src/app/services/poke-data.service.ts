import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

/* this class contains methods to extract data from pokeapi.co database */
export class PokeDataService {
  pokemonList = [] as any;
  qurl : string;
  flagOnlyChecked : boolean = false;
  loadedFlag: boolean = false;
  searchString: string;
  isDataFetched: boolean = false;
  

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

  getPokemonByName( name: string){
    return fetch('https://pokeapi.co/api/v2/pokemon/' + name);
  }


  getPokemonList(){
    const that = this;
    this.fillPokemonList().then(data => {
      data.json().then(function(jsonDat){
              /* gather data from each pokemon and push into an array */
              /* add additional key for caught information */
              Object.keys(jsonDat.results).forEach(element => {
                that.getPokemonByID(jsonDat.results[element].url).then(resp =>
                  {
                    resp.json().then(function(pokemon){
                    pokemon.caught = Math.random() >= 0.5;
                    that.pushPokemons(pokemon);
                    })
              }
          );
        });
      }
    )});


    return this.pokemonList;
  }



  pushPokemons(any){
    this.pokemonList.push(any);
  }

  getPokemons(){
    return this.pokemonList;
  }

  getPokemon(id: number): Observable<any>{
    return of(this.pokemonList.find(poke => poke.id === id));
  }

  /* finds selected pokemon and changes Caught flag */
  _catchPokemon(id: number){
    let foundIndex = this.pokemonList.findIndex(poke => poke.id === id);
    this.pokemonList[foundIndex].caught = true;
  }

  _releasePokemon(id: number){
    let foundIndex = this.pokemonList.findIndex(poke => poke.id === id);
    this.pokemonList[foundIndex].caught = false;
  }

  toggleCheck(){
    this.flagOnlyChecked = !this.flagOnlyChecked;
  }
  

}




