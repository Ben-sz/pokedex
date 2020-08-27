import { Component, OnInit, Input  } from '@angular/core';
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
    /* only during first init */

    if (!this.pokeDataService.isDataFetched){
      this.pokeDataService.getPokemonList(); 
      this.pokeDataService.isDataFetched = true;
    }
    
   /* remove Load spinner after loading */
    setTimeout(() => { 
      this.pokeDataService.loadedFlag = true;
  }, 3000); 


  }



   /* function to navigate to correct pokemon page */ 
  navigateTo(id: number){

    this.router.navigate(['pokePage/',id]); 
  }


  
   
}
