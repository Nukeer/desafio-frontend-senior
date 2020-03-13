import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  private _saveItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getItem(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }

  public addItem(key: string, value: any) {
    let arr = this.getItem(key) as Array<any>;
    if (!arr) {
      arr = [];
    }
    arr.push(value);
    this._saveItem(key, JSON.stringify(arr));
  }

  public newArrayItem(key: string, value: any){
    this._saveItem(key, JSON.stringify(value));
  }
}
