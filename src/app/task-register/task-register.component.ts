import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AdminPanelComponent } from '../admin-panel/admin-panel.component';
import { CookieService } from 'ngx-cookie-service';
import { DatePipe } from '@angular/common';
import { Employee } from 'src/models/Employee';
import { Router } from '@angular/router';
import { Task } from 'src/models/Task';
import { TaskServiceService } from 'src/services/task-service.service';
import { Test1serviceService } from 'src/services/employeeservice.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-task-register',
  templateUrl: './task-register.component.html',
  styleUrls: ['./task-register.component.css']
})
export class TaskRegisterComponent implements OnInit {

  // tslint:disable-next-line: max-line-length
  constructor(private datepipe: DatePipe, private taskService: TaskServiceService, private cservice: CookieService, private empService: Test1serviceService, private router: Router) { }
  task = new Task();
  taskForm: FormGroup;
  employes: any;
  ob: object;
  ngOnInit() {
    this.empService.getAllEmplolyee().subscribe((res) => {
      this.employes = res;
    });

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
    this.task.setatComplete(this.taskForm.value.completiondate);
    this.task.setRemark(this.taskForm.value.remark);
    this.taskService.addTask(this.task, this.taskForm.value.users).subscribe((res) => { console.log(res); });
    this.router.navigate(['/admin']);
  }

  // tslint:disable-next-line: align
  public  dateValidate(): boolean {

    let compdate = new String(this.taskForm.value.completiondate);
    // alert(compdate);

    let datearray: string[];
    datearray = compdate.split('-');
    // console.log('inserted year  ' + datearray[0]);
    // console.log('inserted  month  ' + datearray[1]);
    // console.log('inserted date  ' + datearray[2]);
    let year = new Date().getFullYear();
    let date = new Date().getDate();
    let month = new Date().getMonth();

    if (year <= Number((datearray[0])) && date <= Number(datearray[2]) && month <= Number(datearray[1])) {
      // alert( 'your enterd right date ');
      return true;
    } else {
      alert('pleas insert valid date ' + compdate);
      return false;
    }
   }
  }




