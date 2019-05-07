import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginModel, UserDetail } from '../authentication.model';
import { AuthenticationService } from '../authentication.service';
import { SharedService } from '../../shared/service/shared.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnDestroy, OnInit {

  showLoader = false;
  subscriptionManager = new Subscription();

  authData: LoginModel = new LoginModel();
  passwordShow = true;

  userDetail: UserDetail = new UserDetail();

  constructor(
    private router: Router,
    private sharedService: SharedService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  login() {
    // this.isError = false;
    if (this.authData.username === 'admin@ck.com' && this.authData.password === 'adminck') {
      // this.sharedService.storeRole('admin', true);
      this.router.navigate(['/admin/dashboard']);
    } else if (this.authData.username === 'factory@ck.com' && this.authData.password === 'factoryck') {
      // this.sharedService.storeRole('contractor', true);
      this.router.navigate(['/factory/dashboard']);
    } else if (this.authData.username === 'franchise@ck.com' && this.authData.password === 'franchiseck') {
      // this.sharedService.storeRole('service-provider', true);
      this.router.navigate(['/franchise/dashboard']);
    } else {
      // this.isError = true;
    }
  }

  // login() {
  //   this.showLoader = true;
  //   this.authData.username = this.authData.username.toLowerCase();
  //   this.subscriptionManager.add(this.authenticationService.login(this.authData).subscribe((res) => {
  //     this.sharedService.setUserData('rt', res);
  //     this.getUserDetail();
  //     this.showLoader = false;
  //   }, (err) => {
  //     this.showLoader = false;
  //   }));
  // }

  getUserDetail() {
    this.showLoader = true;
    this.subscriptionManager.add(this.authenticationService.getUserDetail().subscribe((res) => {
      this.userDetail = res;
      this.sharedService.setUserData('rtUser', res);
      if (this.userDetail.authorities.length > 0) {
        if (this.userDetail.authorities.indexOf('ROLE_ADMIN') > -1) {
          this.router.navigate(['/admin/dashboard']);
        } else if (this.userDetail.authorities.indexOf('ROLE_AGENCY') > -1) {
          this.router.navigate(['/agency/dashboard']);
        }
      }
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
