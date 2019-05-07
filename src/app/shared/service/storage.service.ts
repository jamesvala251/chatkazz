import { Injectable } from '@angular/core';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Injectable()
export class StorageService {

  constructor(
    private $localStorage: LocalStorageService,
    private $sessionStorage: SessionStorageService
  ) { }

  getObject(objectKey: string) {
    return JSON.parse(this.$localStorage.retrieve(objectKey));
  }

  setObject(objectKey: string, objectValue: any) {
    this.$localStorage.store(objectKey, typeof objectValue === 'object' ? JSON.stringify(objectValue) : objectValue);
  }

  removeObject(objectKey: string) {
    this.$localStorage.clear(objectKey);
  }

  getSession(objectKey: string) {
    return JSON.parse(this.$sessionStorage.retrieve(objectKey));
  }

  setSession(objectKey: string, objectValue: any) {
    this.$sessionStorage.store(objectKey, typeof objectValue === 'object' ? JSON.stringify(objectValue) : objectValue);
  }

  destroySession(objectKey: string) {
    this.$sessionStorage.clear(objectKey);
  }

  clearLocalStorage() {
    this.$localStorage.clear();
  }

}
