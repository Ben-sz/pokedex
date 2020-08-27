import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeDataService } from '../services/poke-data.service';



@Component({
  selector: 'app-poke-page',
  templateUrl: './poke-page.component.html',
  styleUrls: ['./poke-page.component.css']
})
export class PokePageComponent implements OnInit {
  pokemon : any;

  constructor(
    public pokeDataService: PokeDataService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getPokemon();
  }


  /* get pokemon data from service */
  getPokemon(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.pokeDataService.getPokemon(id)
      .subscribe(dataFromPokemon => this.pokemon = dataFromPokemon);
  }




}
