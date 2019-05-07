import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Injectable()
export class SharedService {

    constructor(
        private router: Router,
        private storageService: StorageService,
        private authenticationService: AuthenticationService
    ) { }

    getUserData(setKey: string, key: string) {
        return this.storageService.getObject(setKey) ? this.storageService.getObject(setKey)[key] : null;
    }

    setUserData(setKey: string, data: object) {
        this.storageService.setObject(setKey, data);
    }

    getUserSession(setKey: string, key: string) {
        return this.storageService.getSession(setKey) ? this.storageService.getSession(setKey)[key] : null;
    }

    setUserSession(setKey: string, data: object) {
        this.storageService.setSession(setKey, data);
    }

    checkLogin() {
        if (this.getUserData('rt', 'id_token') !== null) {
            this.authenticationService.getUserDetail().subscribe((res) => {
                if (res) {
                    this.router.navigate(['admin/dashboard']);
                }
            });
        } else {
            this.logout();
        }
    }


    isLoggedIn() {
        const token = this.getUserData('rt', 'id_token');
        if (token != null) {
            return true;
        }
        this.logout();
        return false;
    }

    logout() {
        this.storageService.removeObject('rt');
        this.storageService.destroySession('rt');
        this.storageService.removeObject('rtUser');
        this.storageService.destroySession('rtUser');
        this.router.navigate(['/login']);
    }

}
