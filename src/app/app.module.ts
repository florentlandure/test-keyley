import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgMaterialModule } from './modules/ng-material/ng-material.module';

import { AppRoutingModule } from './modules/router/app-routing.module';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductComponent
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
