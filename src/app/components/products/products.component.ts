import { Component, OnInit } from '@angular/core';
import { ProductsDataService } from '../../services/products/products-data.service';
import Product from '../../interfaces/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsListComponent implements OnInit {

  private products: Product[] = [];

  constructor(private productService: ProductsDataService) { }

  ngOnInit() {
    this.products = this.productService.getProductList();
  }

}
