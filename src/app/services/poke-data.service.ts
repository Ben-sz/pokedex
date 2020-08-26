import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

/* this class contains methods to extract data from pokeapi.co database */
export class PokeDataService {
  pokemonList = [] as any;
  qurl : string;

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
                    pokemon.caught = false;
                    that.pushPokemons(pokemon);
    
                    })

                  }

                );
              });
      }
    )});
  }

  pushPokemons(any){
    this.pokemonList.push(any);
  }

  getPokemons(){
    return this.pokemonList;
  }

  

}




