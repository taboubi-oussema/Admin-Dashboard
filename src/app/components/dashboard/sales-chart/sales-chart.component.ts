import { Component } from '@angular/core';
import { curveLinear } from 'd3-shape';
import { ScaleType } from '@swimlane/ngx-charts';
interface SalesData {
  name: string;
  value: number;
}

@Component({
  selector: 'app-sales-chart',
  templateUrl: './sales-chart.component.html',
  styleUrls: ['./sales-chart.component.css'],
})
export class SalesChartComponent {
  months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  selectedMonth: string = 'October';

  colorScheme = {
    name: 'custom',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#64b5f6'],
  };

  curve = curveLinear;

  salesData = [
    {
      name: 'Sales',
      series: [
        { name: '5', value: 20 },
        { name: '10', value: 30 },
        { name: '15', value: 45 },
        { name: '20', value: 85 },
        { name: '25', value: 50 },
        { name: '30', value: 45 },
        { name: '35', value: 30 },
        { name: '40', value: 45 },
        { name: '45', value: 70 },
        { name: '50', value: 60 },
        { name: '55', value: 50 },
        { name: '60', value: 55 }
      ]
    },
  ];

  xAxisFormat(val: string): string {
    return `${val}k`;
  }

  yAxisFormat(val: number): string {
    return `${val}%`;
  }

  selectMonth(month: string): void {
    this.selectedMonth = month;
    // Add month selection logic here
  }
}
