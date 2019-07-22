import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { CookieService } from 'ngx-cookie-service';
import { DataService } from 'src/services/data.service';
import { Router } from '@angular/router';
import { Task } from 'src/models/Task';
import { TaskServiceService } from 'src/services/task-service.service';
import { Test1serviceService } from 'src/services/employeeservice.service';

@Component({
  selector: 'app-taskupdate',
  templateUrl: './taskupdate.component.html',
  styleUrls: ['./taskupdate.component.css']
})
export class TaskupdateComponent implements OnInit {


  // tslint:disable-next-line: max-line-length
  constructor(private dataService: DataService, private taskService: TaskServiceService, private cservice: CookieService, private empService: Test1serviceService, private router: Router) { }
  task: any;
  taskForm: FormGroup;
  employes: any;
  // tslint:disable-next-line: ban-types
  ob: Object;
  ngOnInit() {

    this.task = this.dataService.getOption();
    console.log(this.task);
    this.taskForm = new FormGroup({
      remark: new FormControl(''),
      completiondate: new FormControl(''),
      users: new FormControl(''),
    });

  }
    public onSubmit(): void {
    console.log('values of  the task form ' + this.taskForm.value.users);
    console.log('values of  the task form ' + this.taskForm.value.completiondate);
    console.log('values of  the task form ' + this.taskForm.value.remark);
    console.log(this.cservice.get('username'));
    console.log(this.cservice.get('password'));
    this.task.setAtCompleteDate(this.taskForm.value.completiondate);
    this.task.setRemark(this.taskForm.value.remark);
    this.taskService.addTask(this.task, this.taskForm.value.users).subscribe((res) => { console.log(res); });
    this.router.navigate(['/admin']);
  }


}
