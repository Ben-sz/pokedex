import { Component, OnInit } from '@angular/core';
import { PokeDataService } from '../services/poke-data.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

interface Pokemons {
  name: string;
  types: [];
}


@Component({
  selector: 'app-poke-browser',
  templateUrl: './poke-browser.component.html',
  styleUrls: ['./poke-browser.component.css']
})
export class PokeBrowserComponent implements OnInit {
/*   pokeList : any; */
  /* results: any[];  */
  pokemonList = [] as any;
 /*  pokeItemData =  {} as Pokemons; */
  qurl : string;



  constructor(private pokeDataService: PokeDataService) {
   }

  ngOnInit(): void {

    this.getPokemonList();
    console.log(this.getPokemons());
  }

   /* Gather the data of all pokemons in a certain type */

   getPokemonList(){
    const that = this;
    this.pokeDataService.fillPokemonList().then(data => {
      data.json().then(function(jsonDat){


              /* gather data from each pokemon and push into an array */
              /* add additional key for caught information */
              Object.keys(jsonDat.results).forEach(element => {
                that.pokeDataService.getPokemonByID(jsonDat.results[element].url).then(resp =>
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
