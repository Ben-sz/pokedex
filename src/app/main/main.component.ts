import { Component, OnInit } from '@angular/core';
import { PokeDataService } from '../services/poke-data.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  pokeTypes : any;

  constructor(private pokeDataService: PokeDataService) { }

  ngOnInit(): void {
    this.getPokeList();
  }

  /* Gather all pokemon types */
  getPokeList(){
      this.pokeDataService.fillTypeList().subscribe(data => {
        this.pokeTypes = data;
    });
  }

}
