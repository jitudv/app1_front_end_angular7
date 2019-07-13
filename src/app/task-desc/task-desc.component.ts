import { Component, OnInit } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
import { Test1serviceService } from 'src/services/employeeservice.service';

@Component({
  selector: 'app-task-desc',
  templateUrl: './task-desc.component.html',
  styleUrls: ['./task-desc.component.css']
})
export class TaskDescComponent implements OnInit {

  constructor(private  empService:Test1serviceService, private cookie:CookieService) { }
  taskList:any
  ngOnInit() {
   this.empService.getTasksOfUser(this.cookie.get('userid')).subscribe(res =>{
     this.taskList=res;
     console.log(this.taskList)
   })

  }


}
