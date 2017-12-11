import { Component, OnInit, Input } from '@angular/core';
import Product from '../../interfaces/product.interface';
import Category from '../../interfaces/category.interface';
import { ProductsDataService } from '../../services/products/products-data.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  categories: Category[] = [];

  constructor(private productsService: ProductsDataService) { }

  ngOnInit() {
    this.categories = this.product.categories
      .map(category => this.productsService.getCategoryById(category));
  }
}
