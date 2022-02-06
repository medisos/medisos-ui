import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setData(key: string, data: any) {
    const jsonData = JSON.stringify(data)
    localStorage.setItem(key, jsonData)
  }

  getData(key: string) {
    const found = localStorage.getItem(key);
    return found ? JSON.parse(found) : null;
  }

  removeData(key: string) {
    localStorage.removeItem(key)
  }
}
