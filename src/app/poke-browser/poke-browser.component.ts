import { Component, OnInit } from '@angular/core';
import { PokeDataService } from '../services/poke-data.service';

@Component({
  selector: 'app-poke-browser',
  templateUrl: './poke-browser.component.html',
  styleUrls: ['./poke-browser.component.css']
})
export class PokeBrowserComponent implements OnInit {


  constructor(public pokeDataService: PokeDataService) {

   }

  ngOnInit(): void {

    /* Gather the data of all pokemons and store them in service*/
    this.pokeDataService.getPokemonList();

  }


   
}
