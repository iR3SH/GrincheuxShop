import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {BaseApiService} from "../../classes/base-api-service";

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseApiService{
  public userDidChanged= new Subject();
  private user : any;
  constructor(httpClient: HttpClient) {
    super(httpClient, '')
  }
  logout() {
    LoginService.removeToken();
    this.userDidChanged.next(null);
  }
  signup(user: any): Observable<any> {
    return this.post('auth/signup',user)
  }

  login(loginModel: any): Observable<any> {
    return new Observable((obs) => {
      this.post('auth/signin', loginModel).subscribe({
        next: (loginResult: any) => {
          this.setToken(loginResult);
          this.userDidChanged.next(null);
          obs.next();
        }
      });
    })
  }
  me() {
    return new Observable((obs) => {
      if(!!LoginService.getToken()) {
        this.get('api/auth/me').subscribe({
          next: (user) => {
            this.user = user;
            console.log(user);
            obs.next(user);
          }
        });
      }  else {
        obs.next(null);
        this.user = null;
      }
    });
  }
  setToken(loginResult: any) {
    localStorage.setItem('token', loginResult);
  }
  static getToken() {
    return localStorage.getItem("token");
  }
  static removeToken() {
    localStorage.removeItem('token');
  }
}
