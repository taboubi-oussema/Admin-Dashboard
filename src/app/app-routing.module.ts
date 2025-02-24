import { OrderComponent } from './components/order/order.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/dashboard/home/home.component';
import { StockComponent } from './components/stock/stock.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { TablesComponent } from './components/tables/tables.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'orders', component: OrderComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'stock', component: StockComponent },
  { path: 'table', component: TablesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
