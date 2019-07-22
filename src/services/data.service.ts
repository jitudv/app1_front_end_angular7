import { BehaviorSubject, Observable } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  data: any;
  private task = new BehaviorSubject<object>(Object);
  setOption(data) {
    this.data= data;
  }

   public  getOption(): Observable<object> {
    return this.data;
  }
}
