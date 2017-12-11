import { Injectable } from '@angular/core';
import Product from '../../interfaces/product.interface';
import Category from '../../interfaces/category.interface';

@Injectable()
export class ProductsDataService {

  constructor() { }

  getProductList(): Product[] {
    return PRODUCTS;
  }

  getProductById(id: number): Product {
    return PRODUCTS.find(product => product.id === id);
  }

  getCategoryList(): Category[] {
    return CATEGORIES;
  }

  getCategoryById(id: number): Category {
    return CATEGORIES.find(category => category.id === id);
  }

}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Apple MacBook',
    weight: 0.92,
    price: 1499,
    categories: [1],
    images: [
      'https://images.apple.com/v/macbook/g/images/specs/finish_top_spacegray_medium_2x.jpg',
      'https://images.apple.com/v/macbook/g/images/specs/finish_top_rosegold_medium_2x.jpg'
    ],
    description: 'Macbook description'
  },
  {
    id: 2,
    name: 'Apple MacBook Pro',
    weight: 1.37,
    price: 1799,
    categories: [1, 3],
    images: [
      'https://images.apple.com/v/macbook-pro/n/images/specs/touchbar13_mbp_medium_2x.jpg',
      'https://images.apple.com/v/macbook/g/images/specs/finish_top_spacegray_medium_2x.jpg',
      'https://images.apple.com/v/macbook/g/images/specs/finish_top_rosegold_medium_2x.jpg'
    ],
    description: 'Macbook Pro description'
  },
  {
    id: 3,
    name: 'Apple MacBook Air',
    weight: 1.35,
    price: 1299,
    categories: [1],
    images: [
      'https://images.apple.com/v/macbook/g/images/specs/finish_top_spacegray_medium_2x.jpg',
    ],
    description: 'Macbook Air description'
  },
  {
    id: 4,
    name: 'Apple iMac',
    weight: 5.66,
    price: 1699,
    categories: [2],
    images: [
      'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/mac/2017-imac-21-sierra.jpg',
    ],
    description: 'iMac description'
  },
];

const CATEGORIES: Category[] = [
  {
    id: 1,
    title: 'Laptop'
  },
  {
    id: 2,
    title: 'Desktop'
  },
  {
    id: 3,
    title: 'Professionnal'
  }
];
