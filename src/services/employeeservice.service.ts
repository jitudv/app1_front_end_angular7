import { Employee } from 'src/models/Employee';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Test1serviceService {
     constructor(private http: HttpClient) { }

    baseUrl="http://localhost:8001/employee/";




  getEmployee(id: number):Observable<any> {
    // return this.http.get(`${this.baseUrl}/${id}`);
     return  this.http.get(this.baseUrl)
  }

  getData():Observable<Object>
  {
    return this.http.get("http://localhost:8001/employee/"+3);
  }
  public getDataById(id:number):Observable<Object>
  {
    return this.http.get("http://localhost:8001/employee/"+id)
  }

  public getAllEmplolyee():Observable<any>
  {
    return this.http.get(this.baseUrl);
  }


  public saveEmployee(emp:Employee,dept:number):Observable<any>
  {
    // this will  return you msg  and register  an employee  to the  server
    console.log(emp)
   return  this.http.post(this.baseUrl+dept,emp);
  }



}
