import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ex1Component } from './ex1_2/ex1.component';
import { FormsModule } from '@angular/forms';
import { RainbowTextDirective } from './ex1_2/rainbow-text.directive';

@NgModule({
  declarations: [AppComponent, Ex1Component, RainbowTextDirective],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
