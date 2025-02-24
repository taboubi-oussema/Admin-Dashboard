import { Component } from '@angular/core';
export interface PricingPlan {
  type: string;
  price: string;
  features: {
    name: string;
    active: boolean;
  }[];
  buttonClass?: string;
}
@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent {
  pricingPlans: PricingPlan[] = [
    {
      type: 'Basic',
      price: '14.99',
      features: [
        { name: 'Free Setup', active: true },
        { name: 'Bandwidth Limit 10 GB', active: true },
        { name: '20 User Connection', active: true },
        { name: 'Analytics Report', active: false },
        { name: 'Public API Access', active: false },
        { name: 'Plugins Intregation', active: false },
        { name: 'Custom Content Management', active: false }
      ],
      buttonClass: 'btn-outline-primary'
    },
    {
      type: 'Standard',
      price: '49.99',
      features: [
        { name: 'Free Setup', active: true },
        { name: 'Bandwidth Limit 10 GB', active: true },
        { name: '20 User Connection', active: true },
        { name: 'Analytics Report', active: true },
        { name: 'Public API Access', active: true },
        { name: 'Plugins Intregation', active: true },
        { name: 'Custom Content Management', active: true }
      ],
      buttonClass: 'btn-outline-primary'
    },
    {
      type: 'Premium',
      price: '89.99',
      features: [
        { name: 'Free Setup', active: true },
        { name: 'Bandwidth Limit 10 GB', active: true },
        { name: '20 User Connection', active: true },
        { name: 'Analytics Report', active: true },
        { name: 'Public API Access', active: true },
        { name: 'Plugins Intregation', active: true },
        { name: 'Custom Content Management', active: true }
      ],
      buttonClass: 'btn-primary'
    }
  ];
}
