import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';
import { CanActivateChild, Router } from '@angular/router';

@Injectable()
export class AuthGuardService {

    constructor(
        private sharedService: SharedService,
        private router: Router
    ) { }

    canActivate(): boolean {

        if (this.sharedService.isLoggedIn()) {
            if (this.sharedService.getUserData('rtUser', 'authorities').indexOf('ROLE_ADMIN') > -1) {
                return true;
            } else {
                this.router.navigate(['/unauthorise']);
            }
        } else {
            this.sharedService.logout();
            return false;
        }
    }

}


@Injectable()
export class AgencyAuthGuardService {

    constructor(
        private sharedService: SharedService,
        private router: Router
    ) { }

    canActivate(): boolean {
        if (this.sharedService.isLoggedIn()) {
            if (this.sharedService.getUserData('rtUser', 'authorities').indexOf('ROLE_AGENCY') > -1) {
                return true;
            } else {
                this.router.navigate(['/unauthorise']);
            }
        } else {
            this.sharedService.logout();
            return false;
        }
    }

}

@Injectable()
export class AuthGuardChildService implements CanActivateChild {

    constructor(
        private sharedService: SharedService,
        private router: Router
    ) { }

    canActivateChild(): boolean {
        if (this.sharedService.isLoggedIn()) {
            if (this.sharedService.getUserData('rtUser', 'authorities').indexOf('ROLE_ADMIN') > -1) {
                return true;
            } else {
                this.router.navigate(['/unauthorise']);
            }
        } else {
            this.sharedService.logout();
            return false;
        }
    }
}

@Injectable()
export class AgencyAuthGuardChildService implements CanActivateChild {

    constructor(
        private sharedService: SharedService,
        private router: Router
    ) { }

    canActivateChild(): boolean {
        if (this.sharedService.isLoggedIn()) {
            if (this.sharedService.getUserData('rtUser', 'authorities').indexOf('ROLE_AGENCY') > -1) {
                return true;
            } else {
                this.router.navigate(['/unauthorise']);
            }
        } else {
            this.sharedService.logout();
            return false;
        }
    }
}


