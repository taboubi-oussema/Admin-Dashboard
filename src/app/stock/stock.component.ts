import { Component } from '@angular/core';
export interface Product {
  name: string;
  category: string;
  price: number;
  piece: number;
  availableColors: string[];
}
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent {
  products: Product[] = [
    {
      name: 'Apple Watch Series 4',
      category: 'Digital Product',
      price: 690.00,
      piece: 63,
      availableColors: ['#000000', '#C0C0C0', '#FFB6C1']
    },
    {
      name: 'Microsoft Headsquare',
      category: 'Digital Product',
      price: 190.00,
      piece: 13,
      availableColors: ['#000000', '#FF6B6B', '#4169E1', '#FFD700']
    },
    {
      name: "Women's Dress",
      category: 'Fashion',
      price: 640.00,
      piece: 635,
      availableColors: ['#FF69B4', '#87CEEB', '#000080', '#4169E1']
    },
    {
      name: 'Samsung A50',
      category: 'Mobile',
      price: 400.00,
      piece: 67,
      availableColors: ['#4169E1', '#000000', '#FF69B4']
    },
    {
      name: 'Camera',
      category: 'Electronic',
      price: 420.00,
      piece: 52,
      availableColors: ['#4169E1', '#000000', '#FF69B4']
    }
  ];
  formatPrice(price: number): string {
    return price.toFixed(2);
  }

}
