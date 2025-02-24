import { Component } from '@angular/core';
export interface Order {
  id: string;
  name: string;
  address: string;
  date: string;
  type: string;
  status: string;
}
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  orders: Order[] = [
    {
      id: '00001',
      name: 'Christine Brooks',
      address: '089 Kutch Green Apt. 448',
      date: '04 Sep 2019',
      type: 'Electric',
      status: 'Completed'
    },
    {
      id: '00002',
      name: 'Rosie Pearson',
      address: '979 Immanuel Ferry Suite 526',
      date: '28 May 2019',
      type: 'Book',
      status: 'Processing'
    },
    {
      id: '00002',
      name: 'Rosie Pearson',
      address: '979 Immanuel Ferry Suite 526',
      date: '28 May 2019',
      type: 'Book',
      status: 'Rejected'
    },
    {
      id: '00002',
      name: 'Rosie Pearson',
      address: '979 Immanuel Ferry Suite 526',
      date: '28 May 2019',
      type: 'Book',
      status: 'Rejected'
    },
    {
      id: '00002',
      name: 'Rosie Pearson',
      address: '979 Immanuel Ferry Suite 526',
      date: '28 May 2019',
      type: 'Book',
      status: 'Completed'
    },
    {
      id: '00002',
      name: 'Rosie Pearson',
      address: '979 Immanuel Ferry Suite 526',
      date: '28 May 2019',
      type: 'Book',
      status: 'In Transit'
    },
    {
      id: '00002',
      name: 'Rosie Pearson',
      address: '979 Immanuel Ferry Suite 526',
      date: '28 May 2019',
      type: 'Book',
      status: 'Completed'
    },

  ];
  getStatusClass(status: string): string {
    const statusMap: { [key: string]: string } = {
      'Completed': 'bg-success',
      'Processing': 'bg-primary',
      'Rejected': 'bg-danger',
      'On Hold': 'bg-warning',
      'In Transit': 'bg-info'
    };
    return statusMap[status] || '';
  }
}
