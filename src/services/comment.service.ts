import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient, private cservice: CookieService) { }

  userid: string;

  public getComments(taskid: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa(this.cservice.get('username') + ':' + this.cservice.get('password'))
      })
    };
    console.log(taskid);
    return this.http.get('http://localhost:8001/user/comment/' + taskid, httpOptions);
  }

  // tslint:disable-next-line: ban-types
  public addComment(taskid: string, comment: Object): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa(this.cservice.get('username') + ':' + this.cservice.get('password'))
      })
    };
    this.userid = this.cservice.get('userid');
    console.log('user id  ' + this.userid + '\t task id ' + taskid + ' \t task is \t ' + comment);
    return this.http.post('http://localhost:8001/user/comment/' + this.userid + '/' + taskid + '/', comment, httpOptions);
  }

}
