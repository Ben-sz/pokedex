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
    this.onlyCheckedUpdate();
  }


  onlyCheckedUpdate(){
    /* this.caughtFilter.emit(this.onlyCaught); */
    
    this.pokeDataService.toggleCheck();
    console.log("updatelt ertek", this.pokeDataService.flagOnlyChecked);
    
  }

}
