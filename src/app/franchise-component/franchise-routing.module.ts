import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StockComponent } from './stock/stock.component';
import { SalesBillComponent } from './sales-bill/sales-bill.component';
import { SaleComponent } from './sale/sale.component';
import { ReportsComponent } from './reports/reports.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { CreateOrderComponent } from './order/create-order/create-order.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'customer',
    component: CustomerComponent,
  },
  {
    path: 'newOrder',
    component: CreateOrderComponent,
  },
  {
    path: 'orderList',
    component: OrderListComponent,
  },
  {
    path: 'reports',
    component: ReportsComponent,
  },
  {
    path: 'create',
    component: SaleComponent,
  },
  {
    path: 'saleBill',
    component: SalesBillComponent,
  },
  {
    path: 'stock',
    component: StockComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FranchiseRoutingModule { }
