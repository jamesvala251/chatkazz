import { Injectable } from '@angular/core';
import { HttpClientService } from '../shared/service/httpclient.service';
import { LoginModel, UserDetail } from './authentication.model';
import { AppConfig } from '../app.config';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClientService
  ) { }

  login(loginModel: LoginModel) {
    return this.http.post<LoginModel>(AppConfig.AUTHENTICATE, loginModel);
  }

  forgotPassword(params) {
    return this.http.post<string>(AppConfig.ACCOUNT.concat('/resetPassword/init'), params);
  }

  resetPassword(params: object) {
    return this.http.post<object>(AppConfig.ACCOUNT.concat('/reset-password/finish'), params);
  }

  changePassword(params: object) {
    return this.http.post<object>(AppConfig.ACCOUNT.concat('/change-password'), params);
  }

  getUserDetail() {
    return this.http.get<UserDetail>(AppConfig.ACCOUNT);
  }

  activateUser(key) {
    const httpParam = new HttpParams().append('key', key);
    return this.http.get(AppConfig.ACTIVATE,
      { params: httpParam });
  }
}
