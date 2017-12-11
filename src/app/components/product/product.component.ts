import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Product from '../../interfaces/product.interface';
import { ProductsDataService } from '../../services/products/products-data.service';
import Category from '../../interfaces/category.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product;
  selectedImage: string;
  categories: Category[] = [];

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsDataService
  ) { }

  ngOnInit() {
    const subscription = this.route.params.subscribe(param => {
      const id = param.id;
      this.product = this.productsService.getProductById(parseInt(id, 10));
      this.categories = this.product.categories
        .map(category => this.productsService.getCategoryById(category));
      this.selectedImage = this.product.images[0] || '';

      if (subscription) {
        subscription.unsubscribe();
      }
    });
  }

  changeSelectedImage(id: number): void {
    this.selectedImage = this.product.images[id];
  }

}
