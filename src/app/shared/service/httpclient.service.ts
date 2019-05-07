import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from 'src/environments/environment';


export interface IRequestOptions {
  headers?: HttpHeaders;
  observe?: 'body';
  params?: HttpParams;
  reportProgress?: boolean;
  withCredentials?: boolean;
  body?: any;
}

export function httpClientServiceCreator(http: HttpClient) {
  return new HttpClientService(http);
}

@Injectable()
export class HttpClientService {
  constructor(
    private http: HttpClient
  ) { }

  get<T>(url: string, options?: IRequestOptions): Observable<any> {
    return this.http.get<T>(this.updateURL(url), options);
  }

  post<T>(url: string, body: any, options?: IRequestOptions): Observable<any> {
    return this.http.post<T>(this.updateURL(url), body, options);
  }

  put<T>(url: string, body: any, options?: IRequestOptions): Observable<any> {
    return this.http.put<T>(this.updateURL(url), body, options);
  }

  delete<T>(url: string, options?: IRequestOptions): Observable<any> {
    return this.http.delete<T>(this.updateURL(url), options);
  }

  private updateURL(url: string) {
    return environment.HOST_URL + url;
  }
}
