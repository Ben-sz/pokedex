import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';

import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input'; 
import { PokeBrowserComponent } from './poke-browser/poke-browser.component';
import { SearchBarComponent } from './search-bar/search-bar.component'; 


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PokeBrowserComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatListModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
