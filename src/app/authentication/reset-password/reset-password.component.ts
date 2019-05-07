import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { SnakbarService } from 'src/app/shared/service/snakbar.service';
import { AuthenticationService } from '../authentication.service';
import { Messages } from 'src/app/shared/constants/messages.constants';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html'
})

export class ResetPasswordComponent implements OnInit, OnDestroy {

  passwordShow1 = true;
  passwordShow2 = true;
  password: string;
  confirmPassword: string;
  showLoader = false;
  resetKey: string;
  subscriptionManager = new Subscription();

  constructor(
    private activatedRoute: ActivatedRoute,
    private snakbarService: SnakbarService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.filter(params => params.key).subscribe(params => {
      this.resetKey = params.key;
    });
  }

  resetPassword() {
    this.showLoader = true;
    const obj = {
      key: this.resetKey,
      newPassword: this.password
    };

    this.subscriptionManager.add(this.authenticationService.resetPassword(obj).subscribe((res) => {
      this.snakbarService.success(Messages.LOGIN.updatePassword);
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
