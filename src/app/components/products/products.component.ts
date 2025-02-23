import { Component } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Apple Watch Series 4',
      price: 120.0,
      image: '../../../assets/Bitmap.png',
      rating: 4,
      reviews: 131,
    },
    {
      id: 2,
      name: 'Girl Handy Beg',
      price: 45.3,
      image: '../../../assets/Bitmap.png',
      rating: 4,
      reviews: 34,
    },
    {
      id: 3,
      name: 'Beats Headphone',
      price: 75.0,
      image: '../../../assets/Bitmap.png',
      rating: 4,
      reviews: 52,
    },
    {
      id: 3,
      name: 'Beats Headphone',
      price: 75.0,
      image: '../../../assets/Bitmap.png',
      rating: 4,
      reviews: 52,
    },
  ];
}
