import { Component, OnInit } from '@angular/core';

interface Deal {
  productImage: string;
  productName: string;
  location: string;
  dateTime: string;
  piece: number;
  amount: number;
  status: 'Delivered' | 'Pending' | 'Cancelled';
}

@Component({
  selector: 'app-deals-table',
  templateUrl: './deals-table.component.html',
  styleUrls: ['./deals-table.component.css'],
})
export class DealsTableComponent implements OnInit {
  deals: Deal[] = [
    {
      productImage: '../../../../assets/Image.png',
      productName: 'Wireless Headphones',
      location: 'Los Angeles, USA',
      dateTime: '2025-02-21 10:15',
      piece: 1,
      amount: 200,
      status: 'Pending',
    },
    {
      productImage: '../../../../assets/Image.png',
      productName: 'Wireless Headphones',
      location: 'Los Angeles, USA',
      dateTime: '2025-02-21 10:15',
      piece: 1,
      amount: 200,
      status: 'Delivered',
    },
    {
      productImage: '../../../../assets/Image.png',
      productName: 'Wireless Headphones',
      location: 'Los Angeles, USA',
      dateTime: '2025-02-21 10:15',
      piece: 1,
      amount: 200,
      status: 'Pending',
    },
  ];

  selectedMonth: string = 'October';

  ngOnInit() {}
}
