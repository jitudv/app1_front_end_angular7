import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/models/Task';
import { Test1serviceService } from './employeeservice.service';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
   export class TaskServiceService {

  public static BASE_URL = 'http://localhost:8001/user/task/'
  public static BASE_URL_ADMIN = 'http://localhost:8001/admin/task/';
  constructor(private http: HttpClient, private cservice: CookieService) { }






  // get all task for users show
  public getAllTasks(): Observable<object> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa(this.cservice.get('username') + ':' + this.cservice.get('password'))
      })
    };
    // get all the task from the server for admin use only
    return this.http.get('http://localhost:8001/user/task/', httpOptions);
  }    // get all task for the perticular user





  // get single task for the by task id
  public getTask(id: string): Observable<object> {
    //  get the perticulra id
    console.log('url of  task fatch from perticular user' + TaskServiceService.BASE_URL + id);
    return this.http.get(TaskServiceService.BASE_URL + id);
  }




  //  assingn  the task for the perticular user
  public addTask(task: object , emps: Number[]): Observable<object> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa(this.cservice.get('username') + ':' + this.cservice.get('password'))
      })
    };
    console.log(this.cservice.get('username'));
    console.log(this.cservice.get('password'));

    console.log(' this is the url =\t ' + TaskServiceService.BASE_URL + emps);

    return this.http.post(TaskServiceService.BASE_URL_ADMIN + emps, task, httpOptions);
  }





  // delete the task which is assigned and complited  or running by admin
  public deleteTask(id: string): Observable<object> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa(this.cservice.get('username') + ':' + this.cservice.get('password'))
      })
    };
    return this.http.delete('http://localhost:8001/admin/task/' + id, httpOptions);
  }




   //  update task service
  public updateTask(id: string, uids: any,  task: object) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa(this.cservice.get('username') + ':' + this.cservice.get('password'))
      })
    };

    return this.http.put(TaskServiceService.BASE_URL_ADMIN + id + '/' + uids, task , httpOptions);
  }





  //  it will change the task  status runnint to complited
  public changeTaskStatus(id: string, task: object)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa(this.cservice.get('username') + ':' + this.cservice.get('password'))
      })
     };
    console.log('this is the task id ' + task);
    console.log('this is the task id ' + id);
    return this.http.put('http://localhost:8001/user/task/updatestatus/' + id + '/', task, httpOptions);
  }



  //  this service is   get task which is in running state
  public getRuuningTask(id: string): Observable<object> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa(this.cservice.get('username') + ':' + this.cservice.get('password'))
      })
    };
    return this.http.get('http://localhost:8001/task/' + id , httpOptions);
  }


}
