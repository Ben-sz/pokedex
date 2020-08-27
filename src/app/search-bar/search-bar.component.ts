import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PokeDataService } from '../services/poke-data.service';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  onlyCaught : boolean = false;
  @Output() caughtFilter = new EventEmitter<boolean>();


  constructor(public pokeDataService: PokeDataService  ) { }

  ngOnInit(): void {

  }

  /* toggles Check for only caught filter */
  onlyCheckedUpdate(){
    this.pokeDataService.toggleCheck();
  }

  /* updates filtering string from input */
  updateSearchString(item){
    this.pokeDataService.searchString = item.target.value.toLowerCase();
  }


}
