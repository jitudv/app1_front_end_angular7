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
  // tslint:disable-next-line: no-unused-expression
  task: any;
  taskForm: FormGroup;
  employes: any;
  // tslint:disable-next-line: ban-types
  ob: Object;
  ngOnInit() {
    this.empService.getAllEmplolyee().subscribe((res) => {
    this.employes = res;
    });
    this.task = this.dataService.getOption();
    console.log(this.task);
    this.taskForm = new FormGroup({
      remark: new FormControl(this.task.remark),
      completiondate: new FormControl(this.task.atComplete),
      users: new FormControl(''),
    });
  }
  public onSubmit(): void {
    console.log('values of  the task form ' + this.task.values);
    console.log(this.cservice.get('username'));
    console.log(this.cservice.get('password'));
    this.task.atComplet = this.taskForm.value.completiondate;
    this.task.remark = this.taskForm.value.remark;
    this.taskService.updateTask(this.task.id , this.taskForm.value.users, this.task).subscribe((res) => { console.log(res); });
    this.router.navigate(['/admin']);
  }
}
