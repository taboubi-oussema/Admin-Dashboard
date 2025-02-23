import { Component } from '@angular/core';

@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.css'],
})
export class StatsCardComponent {
  metricCards = [
    {
      title: 'Total User',
      value: '40,689',
      trend: {
        value: 8.5,
        isUp: true,
        timeFrame: 'from yesterday',
      },

      iconPath: '/assets/users-solid.svg',
    },
    {
      title: 'Total Order',
      value: '10293',
      trend: {
        value: 1.3,
        isUp: true,
        timeFrame: 'from past week',
      },

      iconPath: '../../../../assets/box-open-solid.svg',
    },
    {
      title: 'Total Sales',
      value: '$89,000',
      trend: {
        value: 4.3,
        isUp: false,
        timeFrame: 'from yesterday',
      },

      iconPath: '/assets/chart-line-solid.svg',
    },
    {
      title: 'Total Pending',
      value: '2040',
      trend: {
        value: 1.6,
        isUp: true,
        timeFrame: 'from yesterday',
      },

      iconPath: '/assets/clock-regular.svg',
    },
  ];
}
