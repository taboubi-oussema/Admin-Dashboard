import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HomeComponent } from './components/dashboard/home/home.component';
import { StatsCardComponent } from './components/dashboard/stats-card/stats-card.component';
import { SalesChartComponent } from './components/dashboard/sales-chart/sales-chart.component';
import { DealsTableComponent } from './components/dashboard/deals-table/deals-table.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ProductsComponent } from './components/products/products.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    StatsCardComponent,
    SalesChartComponent,
    DealsTableComponent,
    ProductsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgxChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
