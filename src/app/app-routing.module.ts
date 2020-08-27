import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';

import { PokePageComponent } from './poke-page/poke-page.component';



const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'pokePage', component: PokePageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
