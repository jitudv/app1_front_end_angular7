import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CookieService } from 'ngx-cookie-service';
import { Employee } from 'src/models/Employee';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class Test1serviceService {
  constructor(private http: HttpClient, private cservice: CookieService) { }

  baseUrl = 'http://localhost:8001/employee/';

  getEmployee(id: number): Observable<any> {
    // return this.http.get(`${this.baseUrl}/${id}`);
    return this.http.get(this.baseUrl);
  }

  getData(): Observable<object> {
    return this.http.get('http://localhost:8001/employee/' + 3);
  }
  public getDataById(id: number): Observable<object> {
    return this.http.get('http://localhost:8001/employee/' + id);
  }

  public getAllEmplolyee(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa(this.cservice.get('username') + ':' + this.cservice.get('password'))
      })
    };
    return this.http.get('http://localhost:8001/admin/employee/', httpOptions);
  }


  public saveEmployee(emp: Employee, dept: number) {
    // this will  return you msg  and register  an employee  to the  server
    // console.log(emp)
    return this.http.post(this.baseUrl + dept, emp);
  }

  public getTasksOfUser(id: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa(this.cservice.get('username') + ':' + this.cservice.get('password'))
      })
    };  // this is authorization and authentication header  for api
    console.log('url of Task for User ' + 'http://localhost:8001/user/task/' + id);
    return this.http.get('http://localhost:8001/user/task/' + id, httpOptions);
  }

  public deleteEmployee(id: string): Observable<object> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa(this.cservice.get('username') + ':' + this.cservice.get('password'))
      })
    };

    return this.http.delete('http://localhost:8001/admin/employee/' + id, httpOptions);
  }

  public convertAdmin(id: string): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa(this.cservice.get('username') + ':' + this.cservice.get('password'))
      })
    };
    return this.http.patch('http://localhost:8001/admin/create/admin/' + id, Object, httpOptions );
  }
}
