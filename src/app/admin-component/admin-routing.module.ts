import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportComponent } from './report/report.component';
import { UsersComponent } from './master/users/users.component';
import { MenuComponent } from './master/menu/menu.component';
import { FranchiseComponent } from './master/franchise/franchise.component';
import { FactoryComponent } from './master/factory/factory.component';
import { DishesComponent } from './master/dishes/dishes.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'dishes',
    component: DishesComponent,
  },
  {
    path: 'factory',
    component: FactoryComponent,
  },
  {
    path: 'franchise',
    component: FranchiseComponent,
  },
  {
    path: 'menu',
    component: MenuComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'report',
    component: ReportComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
