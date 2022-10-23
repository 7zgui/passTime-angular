import { Injectable } from '@angular/core';

const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveToken(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
  }

  public getToken(): any {
    const token = window.sessionStorage.getItem(USER_KEY);
    if (token) {
      return JSON.parse(token);
    }

    return {};
  }

  public isLoggedIn(): boolean {
    const token = window.sessionStorage.getItem(USER_KEY);
    if (token) {
      return true;
    }

    return false;
  }
}