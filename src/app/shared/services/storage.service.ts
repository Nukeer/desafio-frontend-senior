import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  public saveItem(key: string, value: any) {
    localStorage.setItem(key, value);
  }

  public getItem(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }

  public addItem(key: string, value: any) {
    const arr = this.getItem(key);
    arr.push(value);
    this.saveItem(key, arr);
  }

  private removeItem(key: string, value: any) {}
}
