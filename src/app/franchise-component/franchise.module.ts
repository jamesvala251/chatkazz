import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SaleComponent } from './sale/sale.component';
import { SalesBillComponent } from './sales-bill/sales-bill.component';
import { StockComponent } from './stock/stock.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { CreateOrderComponent } from './order/create-order/create-order.component';
import { CustomerComponent } from './customer/customer.component';
import { ReportsComponent } from './reports/reports.component';
import { FranchiseRoutingModule } from './franchise-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FranchiseRoutingModule
  ],
  declarations: [DashboardComponent, SaleComponent, SalesBillComponent, StockComponent, OrderListComponent, CreateOrderComponent, CustomerComponent, ReportsComponent]
})
export class FranchiseModule { }
