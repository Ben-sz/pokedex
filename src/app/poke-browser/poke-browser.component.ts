import { Component, OnInit, Input } from '@angular/core';
import { PokeDataService } from '../services/poke-data.service';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-poke-browser',
  templateUrl: './poke-browser.component.html',
  styleUrls: ['./poke-browser.component.css']
})
export class PokeBrowserComponent implements OnInit {

  @Input() selectedOption: string;

  constructor(public pokeDataService: PokeDataService, private router: Router) {

   }

  ngOnInit(): void {

    /* Gather the data of all pokemons and store them in service*/
    this.pokeDataService.getPokemonList();
    console.log(this.pokeDataService.getPokemons());

  }


  modifyFilter(){

  }

   /* function to navigate to correct pokemon page */ 
  navigateTo(id: number){

    console.log(id);
    this.router.navigate(['pokePage/',id]); 
  
  }

   
}
