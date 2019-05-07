import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Location } from '@angular/common';

import { SnakbarService } from 'src/app/shared/service/snakbar.service';
import { AuthenticationService } from '../authentication.service';
import { Messages } from 'src/app/shared/constants/messages.constants';
import { SharedService } from 'src/app/shared/service/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html'
})

export class ChangePasswordComponent implements OnDestroy {

  passwordShow1 = true;
  passwordShow2 = true;
  passwordShow3 = true;
  oldPassword: string;
  password: string;
  confirmPassword: string;

  showLoader = false;
  subscriptionManager = new Subscription();

  constructor(
    private snakbarService: SnakbarService,
    private sharedService: SharedService,
    private authenticationService: AuthenticationService,
    private router: Router,
    private location: Location
  ) { }

  changePassword() {
    this.showLoader = true;
    const obj = {
      'currentPassword': this.oldPassword,
      'newPassword': this.confirmPassword
    };
    this.subscriptionManager.add(this.authenticationService.changePassword(obj).subscribe((res) => {
      this.snakbarService.success(Messages.LOGIN.changePassword);
      if (this.sharedService.getUserData('rtUser', 'authorities').indexOf('ROLE_ADMIN') > -1) {
        this.router.navigate(['/admin/dashboard']);
      } else if (this.sharedService.getUserData('rtUser', 'authorities').indexOf('ROLE_AGENCY') > -1) {
        this.router.navigate(['/agency/dashboard']);
      }
      this.showLoader = false;
    }, (err) => {
      this.showLoader = false;
    }));
  }

  goBack() {
    this.location.back();
  }

  ngOnDestroy() {
    if (this.subscriptionManager) {
      this.subscriptionManager.unsubscribe();
    }
  }

}
