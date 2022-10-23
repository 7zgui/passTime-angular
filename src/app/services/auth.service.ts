import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const USER_KEY = 'auth-user';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({ providedIn: 'root' })
export class AuthService {
    
    constructor(private http: HttpClient) {}


    public isLoggedIn(): boolean {
      const user = window.sessionStorage.getItem(USER_KEY);
      if (user) {
        return true;
      }
  
      return false;
    }
  
    login(username: string, password: string): Observable<any> {
      return this.http.post(
        environment.api + '/auth/signin',
        {
          username,
          password,
        },
        httpOptions
      );
    }
  
    register(username: string, email: string, password: string): Observable<any> {
      return this.http.post(
        environment.api + '/auth/signup',
        {
          username,
          email,
          password,
        },
        httpOptions
      );
    }
  
    logout(): Observable<any> {
      return this.http.post(environment.api + 'signout', { }, httpOptions);
    }
  }