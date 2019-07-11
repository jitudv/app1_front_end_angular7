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

  public static BASE_URL="http://localhost:8001/user/task/"
  public static BASE_URL_ADMIN="http://localhost:8001/admin/task/";
  constructor(private http:HttpClient,private cservice:CookieService ) { }

  public getTasks():Observable<Object>
  {
    // get all the task from the server
     return this.http.get(TaskServiceService.BASE_URL)
  }

 public getTask(id:string):Observable<Object>
 {
   //  get the perticulra id
   return this.http.get(TaskServiceService.BASE_URL+id);
 }

 public addTask(task:Object,emps:Number[]):Observable<Object>
 {

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa(this.cservice.get('username')+ ':' +this.cservice.get('password'))
    })
  };
  console.log(this.cservice.get('username'))
  console.log(this.cservice.get('password'))

  console.log(" this is the url =\t  "+TaskServiceService.BASE_URL+emps)

   return this.http.post(TaskServiceService.BASE_URL_ADMIN+emps,task,httpOptions);
 }

 public deleteTask(id:string):Observable<Object>
 {
   // update the perticular task using id and sent  an task object to server
  return  this.http.delete(TaskServiceService.BASE_URL+id)
 }

public updateTask(id:string, task:Object)
{
  return  this.http.put(TaskServiceService.BASE_URL+id ,task)
}

}
