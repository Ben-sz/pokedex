import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';

import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input'; 
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'; 
import { PokeBrowserComponent } from './poke-browser/poke-browser.component';
import { SearchBarComponent } from './search-bar/search-bar.component'; 
import { FormsModule }   from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import {CommonModule} from "@angular/common";
import { PokePageComponent } from './poke-page/poke-page.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PokeBrowserComponent,
    SearchBarComponent,
    FilterPipe,
    PokePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatListModule,
    MatInputModule,
    CommonModule,
    MatButtonModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
