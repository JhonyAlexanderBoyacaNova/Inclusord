import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/user/home/home.component';
import { VowelsComponent } from './components/user/vowels/vowels.component';
import { AbecedaryComponent } from './components/user/abecedary/abecedary.component';
import { ActivityComponent } from './components/user/activity/activity.component';
import {HashLocationStrategy, LocationStrategy } from "@angular/common";
import { RouletteComponent } from './components/user/roulette/roulette.component';
import { PruebaComponent } from './prueba/prueba.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VowelsComponent,
    AbecedaryComponent,
    ActivityComponent,
    RouletteComponent,
    PruebaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  {provide: LocationStrategy, useClass:HashLocationStrategy} 
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
