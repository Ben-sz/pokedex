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
  pokeList : any;
  results: any[]; 
  pokeTypes = [] as any;
  pokemonList = [] as any;
  pokeItemData =  {} as Pokemons;
  newPoke : any[];
  qurl : string;
  typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];


  constructor(private pokeDataService: PokeDataService) {
    
   }

  ngOnInit(): void {
    console.log(typeof(this. pokemonList));
    this.getPokemonList();

  }

   /* Gather all pokemons in a certain type */
   getPokemonList(){

    const that = this;
    this.pokeDataService.fillPokemonList().then(data => {
      console.log("dataaa", data);
      data.json().then(function(jsonDat){
              console.log("typeof", jsonDat);
      
/* 
              that.pokeDataService.getPokemonByID(this.pokeList.results[i].url) */

              Object.keys(jsonDat.results).forEach(element => {

                that.pokeDataService.getPokemonByID(jsonDat.results[element].url).then(resp =>
                  {
                    resp.json().then(function(pokemon){
                    console.log(element)
                    pokemon.caught = false;
                    that.pushPokemons(pokemon);
                    
                    /* if the pokemon has 2 types, add both */
         //           let pokeTypes = (typeof(pokemon as any).types[1] === "undefined" ?
       //                             (pokemon as any).types[0].type.name  : 
     //                               /* if pokemon has 1 type, add only one */
    //                                [(pokemon as any).types[0].type.name, (pokemon as any).types[1].type.name]); 
                    

                    })

                  }

                );



              });
           

                    }
      
  )});
  }

    pushPokemons(any){
/* 
      this.pokeItemData.name = newName;
      this.pokeItemData.types = newType; */
      this.pokemonList.push(any);
      console.log(this.pokemonList)
  /* 
      console.log(this.pokeTypes); */
      /* this.pokeTypes.push(newData);  */
 /*      console.log("pokeTypes", this.pokeTypes);  */

      
    }




}
