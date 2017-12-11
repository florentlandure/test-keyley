import { Injectable } from '@angular/core';

@Injectable()
export class ProductsDataService {

  constructor() { }

}

const PRODUCTS = [
  {
    name: 'Apple MacBook',
    weight: 0.92,
    price: 1499,
    categories: [1],
    images: [
      'https://images.apple.com/v/macbook/g/images/specs/finish_top_spacegray_medium_2x.jpg',
      'https://images.apple.com/v/macbook/g/images/specs/finish_top_rosegold_medium_2x.jpg'
    ]
  },
  {
    name: 'Apple MacBook Pro',
    weight: 1.37,
    price: 1799,
    categories: [1, 3],
    images: [
      'https://images.apple.com/v/macbook/g/images/specs/finish_top_spacegray_medium_2x.jpg',
      'https://images.apple.com/v/macbook/g/images/specs/finish_top_rosegold_medium_2x.jpg',
      'https://images.apple.com/v/macbook-pro/n/images/specs/touchbar13_mbp_medium_2x.jpg'
    ]
  },
  {
    name: 'Apple MacBook Air',
    weight: 1.35,
    price: 1299,
    categories: [1],
    images: [
      'https://images.apple.com/v/macbook/g/images/specs/finish_top_spacegray_medium_2x.jpg',
    ]
  },
  {
    name: 'Apple iMac',
    weight: 5.66,
    price: 1699,
    categories: [2],
    images: [
      'https://images.apple.com/v/macbook/g/images/specs/finish_top_spacegray_medium_2x.jpg',
    ]
  },
];

const CATEGORIES = [
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
