import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { CookieService } from 'ngx-cookie-service';
import { Employee } from 'src/models/Employee';
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

  constructor(private taskService: TaskServiceService, private cservice: CookieService, private empService: Test1serviceService) { }
  task = new Task()
  taskForm: FormGroup
  employes:any
  ngOnInit() {
    this.empService.getAllEmplolyee().subscribe((res) => {


      const obj = res.reduce((o, key) => Object.assign(o, {[key]:  key }), {});
      this.employes=res;
    //  console.log(this.employes[0][1])
     // console.log(obj)
      for(var i =0; i<res.length;i++)
       {
        //this.employes=res[i].reduce((o, key) => Object.assign(o, {[key]:   key }), {})
      // console.log(res[i].reduce((o, key) => Object.assign(o, {[key]:   key }), {}))
       }
       console.log(this.employes[0][1])
      })

      this.taskForm = new FormGroup({
      remark: new FormControl(''),
      completiondate: new FormControl(''),
      users: new FormControl(''),
    })

  }

  public onSubmit(): void {
    console.log("values of  the task form " + this.taskForm.value.users)
    console.log("values of  the task form " + this.taskForm.value.completiondate)
    console.log("values of  the task form " + this.taskForm.value.remark)
    console.log(this.cservice.get('username'))
    console.log(this.cservice.get('password'))
    this.task.setAtCompleteDate(this.taskForm.value.completiondate)
    this.task.setRemark(this.taskForm.value.remark)
    this.taskService.addTask(this.task, this.taskForm.value.users).subscribe((res) => { console.log(res) });

     }

}
