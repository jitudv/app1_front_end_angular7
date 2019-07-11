import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

    public BASEURL="http://localhost:8001/"
  constructor(private  http:HttpClient) { }

  public getDepartments()
  {
     return  this.http.get(this.BASEURL+'department');
  }



}
