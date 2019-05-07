import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AuthenticationService } from './authentication.service';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ActivateUserComponent } from './activate-user/activate-user.component';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SharedModule
  ],
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    ResetPasswordComponent,
    ActivateUserComponent
  ],
  providers: [
    AuthenticationService
  ]
})

export class AuthenticationModule { }
