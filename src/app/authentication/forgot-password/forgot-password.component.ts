import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AuthenticationService } from '../authentication.service';
import { Messages } from 'src/app/shared/constants/messages.constants';
import { SnakbarService } from 'src/app/shared/service/snakbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html'
})

export class ForgotPasswordComponent implements OnInit, OnDestroy {
  emailId: string;
  showLoader = false;
  subscriptionManager = new Subscription();

  constructor(
    private router: Router,
    private snakbarService: SnakbarService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  forgotPassword() {
    this.showLoader = true;
    this.subscriptionManager.add(this.authenticationService.forgotPassword(this.emailId.toLowerCase()).subscribe((res) => {
      this.snakbarService.success(Messages.LOGIN.forgotPassword);
      this.showLoader = false;
    }, (err) => {
      this.showLoader = false;
    }));
  }

  ngOnDestroy() {
    if (this.subscriptionManager) {
      this.subscriptionManager.unsubscribe();
    }
  }

}
