import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './layouts/error/error.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UnauthoriseComponent } from './layouts/unauthorise/unauthorise.component';
import { OutsideLayoutComponent } from './layouts/outside-layout/outside-layout.component';
import { AuthGuardService, AgencyAuthGuardService, AuthGuardChildService, AgencyAuthGuardChildService } from './shared/service/auth-guard.service';
import { FranchiseLayoutComponent } from './layouts/franchise-layout/franchise-layout.component';
import { FactoryLayoutComponent } from './layouts/factory-layout/factory-layout.component';

const routes: Routes = [
  {
    path: '',
    component: OutsideLayoutComponent,
    loadChildren: './authentication/authentication.module#AuthenticationModule'
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    loadChildren: './admin-component/admin.module#AdminModule'
  },
  {
    path: 'franchise',
    component: FranchiseLayoutComponent,
    loadChildren: './franchise-component/franchise.module#FranchiseModule'
  },
  {
    path: 'factory',
    component: FactoryLayoutComponent,
    loadChildren: './factory-component/factory.module#FactoryModule'
  },
  {
    path: 'unauthorise',
    component: UnauthoriseComponent
  },
  {
    path: '**',
    component: ErrorComponent
  },

  // { path: '**', component: LandingPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
