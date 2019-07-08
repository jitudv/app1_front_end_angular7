import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Base64 } from 'js-base64';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })  // inject to root
export class LoginLogoutService {

  static BASE_URL = "http://localhost:8001"

  constructor(private http: HttpClient) { }  // this is constructor

  userLogin(username: string, password: string): Observable<Object> {


    //let data1 = (btoa(username+':'+password))

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(username + ':' + password)
      })
    };

    return this.http.get(LoginLogoutService.BASE_URL + "/user/login", httpOptions)
  }






}
