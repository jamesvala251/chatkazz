import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error/error.component';
import { FooterComponent } from './footer/footer.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SharedModule } from '../shared/shared.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminNavbarComponent } from './admin-layout/admin-navbar.component';
import { AccordionDirective } from './menu-accordion/accordion.directive';
import { AccordionLinkDirective } from './menu-accordion/accordionlink.directive';
import { AccordionAnchorDirective } from './menu-accordion/accordionanchor.directive';
import { UnauthoriseComponent } from './unauthorise/unauthorise.component';
import { OutsideLayoutComponent } from './outside-layout/outside-layout.component';
import { AdminMenuService } from './admin-layout/navbar.service';
import { FranchiseMenuService } from './franchise-layout/navbar.service';
import { FactoryMenuService } from './factory-layout/navbar.service';
import { FranchiseLayoutComponent } from './franchise-layout/franchise-layout.component';
import { FactoryLayoutComponent } from './factory-layout/factory-layout.component';
import { FactoryNavbarComponent } from './factory-layout/factory-navbar.component';
import { FranchiseNavbarComponent } from './franchise-layout/franchise-navbar.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ErrorComponent,
    FooterComponent,
    TopbarComponent,
    AdminNavbarComponent,
    AdminLayoutComponent,
    FranchiseLayoutComponent,
    FranchiseNavbarComponent,
    FactoryLayoutComponent,
    FactoryNavbarComponent,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    UnauthoriseComponent,
    OutsideLayoutComponent,
  ],
  providers: [
    AdminMenuService,
    FranchiseMenuService,
    FactoryMenuService
  ]
})

export class LayoutsModule { }
