import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ReportComponent } from './report/report.component';
import { UsersComponent } from './master/users/users.component';
import { FactoryComponent } from './master/factory/factory.component';
import { DishesComponent } from './master/dishes/dishes.component';
import { MenuComponent } from './master/menu/menu.component';
import { FranchiseComponent } from './master/franchise/franchise.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [DashboardComponent, ReportComponent, UsersComponent, FactoryComponent, DishesComponent, MenuComponent, FranchiseComponent]
})
export class AdminModule { }
