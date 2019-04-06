import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/user/home/home.component';
import { VowelsComponent } from './components/user/vowels/vowels.component';
import { AbecedaryComponent } from './components/user/abecedary/abecedary.component';
import { ActivityComponent } from './components/user/activity/activity.component';
import { RouletteComponent } from './components/user/roulette/roulette.component';


const routes: Routes = [
  { path:"", redirectTo:"inicio", pathMatch:"full" },
  { path:"inicio", component:HomeComponent},
  { path:"vocales", component:VowelsComponent},
  { path:"abecedario", component:AbecedaryComponent},
  { path:"actividades", component:ActivityComponent},
  { path:"actividades/palabra/:nombre", component:ActivityComponent},
  { path:"ruleta", component:RouletteComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
