import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { AppConstant } from 'src/models/AppConstant';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from 'src/services/data.service';
import { Location } from '@angular/common';
import { Task } from 'src/models/Task';
import { TaskServiceService } from 'src/services/task-service.service';
import { Test1serviceService } from 'src/services/employeeservice.service';
import { throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  // tslint:disable-next-line: max-line-length
  constructor(private dataService: DataService, private empservice: Test1serviceService, private location: Location, private router: Router, private cookieService: CookieService, private taskservice: TaskServiceService) {
  }

  tasks: object;
  users:any[];


   ngOnInit() {
      this.taskservice.getAllTasks().subscribe((res) => {
      this.tasks = res;
      // thi.users=this.tasks.employees;
      console.log(res);
      console.log('tasks load from server ' + this.tasks);
      });
  }




  public newTaskClick() {

  this.router.navigate(['taskreg']);
    // console.log(this.cookieService.get('username'))
    // console.log(this.cookieService.get('password'))
  }

  public taskDesc(id: string) {
    alert(' this is task id ' + id);
  }



  public deleteTaskByid(id: string) {
    alert('task for delete id is ' + id);
    this.taskservice.deleteTask(id).subscribe((res) => {
      console.log('task deleted' + res);
      this.ngOnInit();
      this.pageRelod();

    });
  }

 public TaskUpdateButton(id: string, task: object)  {
    alert(' task id for update the task ' + id);
    this.dataService.setOption(task);

    this.router.navigate(['updatetask']);
  }



  public pageRelod()  {
    // window.location.href = '/admin';
    window.location.reload();
  }

  public userManagement()  {
    // alert('clicked on user management ')
    this.router.navigate(['usermanagement']);
  }

  public makeAdmin(id: string, name: string)  {
      this.empservice.convertAdmin(id).subscribe((res) => {
      console.log(res);
    });
  }

  public taskReasign(id: string , task: Task) {
    alert(' task id for update the task ' + id);
    this.dataService.setOption(task);
    this.router.navigate(['reasigntask']);
  }

  // assign jobs for futer  activation
  public sheduleTask() {

  }

  // navigate admin to his task bar
  public adminstasks() {
    this.router.navigate(['uspan']);
  }

}
