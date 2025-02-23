import { Component } from '@angular/core';

interface NavItem {
  label: string;
  link?: string;
  icon?: string;
  children?: NavItem[];
  isHeader?: boolean;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  navigationItems: NavItem[] = [
    { label: 'Dashboard', link: '/dashboard' },
    { label: 'Products', link: '/products' },

    { label: 'Order Lists', link: '/orders' },
    { label: 'Product Stock', link: '/stock' },

    { label: 'PAGES', isHeader: true },
    { label: 'Pricing', link: '/pricing' },
    { label: 'Calendar', link: '/calendar' },
    { label: 'To-Do', link: '/todo' },
    { label: 'Contact', link: '/contact' },
    { label: 'Invoice', link: '/invoice' },
    { label: 'UI Elements', link: '/ui-elements' },
    { label: 'Team', link: '/team' },
    { label: 'Table', link: '/table' },

    { label: 'Settings', link: '/settings' },
    { label: 'Logout', link: '/logout' },
  ];
}
