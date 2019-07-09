import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task-register',
  templateUrl: './task-register.component.html',
  styleUrls: ['./task-register.component.css']
})
export class TaskRegisterComponent implements OnInit {

  constructor() { }
   taskForm:FormGroup
  ngOnInit()
  {
     this.taskForm=new FormGroup({
      remark: new FormControl(''),
      completiondate: new FormControl(''),
      users: new FormControl(''),
      })

  }

  public onSubmit():void{
    console.log("values of  the task form "+this.taskForm.value.users)
    console.log("values of  the task form "+this.taskForm.value.completiondate)
    console.log("values of  the task form "+this.taskForm.value.remark)
  }

}
