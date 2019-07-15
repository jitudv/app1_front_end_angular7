import { Component, OnInit } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
import { Test1serviceService } from 'src/services/employeeservice.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  constructor(private empService: Test1serviceService, private cookie: CookieService) { }
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

  public taskCompleteClick(taskid:string) {
  alert("at task complete  clicked"+taskid)
  }

}
