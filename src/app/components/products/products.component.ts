import { Component, OnInit } from '@angular/core';
import { ProductsDataService } from '../../services/products/products-data.service';
import Product from '../../interfaces/product.interface';
import Category from '../../interfaces/category.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [];
  categories: Category[] = [];

  constructor(private productService: ProductsDataService) { }

  ngOnInit() {
    this.products = this.productService.getProductList();
    this.categories = this.productService.getCategoryList();
  }

  filterByTag(id: number): void {
    if (id === 0) {
      this.products = this.productService.getProductList();
    } else {
      this.products = this.productService.getProductList()
        .filter(product => !!product.categories.find(category => category === id));
    }
  }

  searchProduct(userInput: string): void {
    if (userInput.length > 0) {
      userInput = userInput.toLowerCase();
      this.products = this.productService.getProductList()
        .filter(product => product.description.toLowerCase().indexOf(userInput) > -1);
    } else {
      this.products = this.productService.getProductList();
    }
  }
}
