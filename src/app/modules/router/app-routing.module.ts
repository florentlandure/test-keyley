import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsListComponent } from '../../components/products/products.component';
import { ProductComponent } from '../../components/product/product.component';

const routes: Routes = [
  { path: 'product/:id',      component: ProductComponent },
  {
    path: 'products',
    component: ProductsListComponent
  },
  { path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
  { path: '**', component: ProductsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
