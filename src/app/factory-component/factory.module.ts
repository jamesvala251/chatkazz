import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderComponent } from './order/order.component';
import { StockComponent } from './stock/stock.component';
import { ReportComponent } from './report/report.component';
import { FactoryRoutingModule } from './factory-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FactoryRoutingModule
  ],
  declarations: [DashboardComponent, OrderComponent, StockComponent, ReportComponent]
})
export class FactoryModule { }
