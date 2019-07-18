import { Component, OnInit } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
import { TaskServiceService } from 'src/services/task-service.service';
import { Test1serviceService } from 'src/services/employeeservice.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  constructor(private empService: Test1serviceService, private cookie: CookieService ,private taskService:TaskServiceService ) { }
  taskList: any
  ngOnInit() {
    this.empService.getTasksOfUser(this.cookie.get('userid')).subscribe(res => {
      this.taskList = res;
      console.log("this is  the use id "+this.cookie.get("userid"))
      console.log(this.taskList)
    })

  }

  public commentClick(taskid:string) {
    alert("you clicked"+taskid)
  }

  public taskCompleteClick(taskid:string ,task:Object) {
    this.ngOnInit();
    window.location.reload();
    this.taskService.changeTaskStatus(taskid,task).subscribe(res =>{
    console.log("response of the task changed  service "+res)
  })
  }

}
