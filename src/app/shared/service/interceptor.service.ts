import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { SharedService } from './shared.service';
import { ERRORCODES } from '../constants/error.constant';
import { SnakbarService } from './snakbar.service';

@Injectable({
  providedIn: 'root'
})

export class InterceptorService implements HttpInterceptor {

  constructor(
    private sharedService: SharedService,
    private snakbarService: SnakbarService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = this.sharedService.getUserData('rt', 'id_token');
    let authRequest;
    if (authToken) {
      authRequest = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + authToken) });
    } else {
      authRequest = req.clone();
    }
    return next
      .handle(authRequest)
      .do(event => {
        if (event instanceof HttpResponse) {
          this.requestSuccess(event);
        }
      })
      .catch((error: HttpErrorResponse) => {
        if (error.error.applicationErrorCode !== undefined && error.error.applicationErrorCode !== null && error.error.applicationErrorCode in ERRORCODES) {
          if (error.error.applicationErrorCode === 1000) {
            this.sharedService.logout();
          } else {
            this.snakbarService.error(ERRORCODES[error.error.applicationErrorCode]);
          }
        } else {
          this.snakbarService.error(error.message);
        }
        return Observable.throw(error);
      });
  }

  private requestSuccess(res: HttpResponse<any>) {
    return res;
  }

}
