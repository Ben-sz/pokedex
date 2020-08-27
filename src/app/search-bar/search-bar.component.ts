import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  onlyCaught : boolean = false;
  @Output() caughtFilter = new EventEmitter<boolean>();


  constructor(
    
  ) { }

  ngOnInit(): void {
    this.onlyCheckedUpdate();
  }


  onlyCheckedUpdate(){
    this.caughtFilter.emit(true);
    
  }

}
