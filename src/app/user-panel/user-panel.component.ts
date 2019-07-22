import { Component, OnInit, Output } from '@angular/core';

import { CommentComponent } from '../comment/comment.component';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from 'src/services/data.service';
import { Router } from '@angular/router';
import { TaskServiceService } from 'src/services/task-service.service';
import { Test1serviceService } from 'src/services/employeeservice.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  // tslint:disable-next-line: max-line-length
  constructor(private dataservice: DataService, private empService: Test1serviceService, private cookie: CookieService, private taskService: TaskServiceService, private router: Router) { }
  public static taskid = '0';
  taskList: any;
  ngOnInit() {
    this.empService.getTasksOfUser(this.cookie.get('userid')).subscribe(res => {
      this.taskList = res;
      console.log('this is  the use id ' + this.cookie.get('userid'));
      console.log(this.taskList);
    })

  }

  public commentClick(taskid: string) {
    // this.dataservice.changeMessage(taskid)
    this.cookie.set('taskid', taskid);
    // UserPanelComponent.taskid = taskid;
    this.router.navigate(['comment']);


  }

  // tslint:disable-next-line: ban-types
  public taskCompleteClick(taskid: string, task: Object): void {
    this.ngOnInit();
    window.location.reload();
    this.taskService.changeTaskStatus(taskid, task).subscribe(res => {
      console.log('response of the task changed  service ' + res);
    });
  }

}
