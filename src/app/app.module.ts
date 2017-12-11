import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgMaterialModule } from './modules/ng-material/ng-material.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
