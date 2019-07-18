import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { AppConstant } from 'src/models/AppConstant';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Location } from "@angular/common";
import { TaskServiceService } from 'src/services/task-service.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  constructor( private location: Location , private  router:Router , private cookieService:CookieService , private taskservice:TaskServiceService){
     // override the route reuse strategy

     this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
   }

   this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
         // trick the Router into believing it's last link wasn't previously loaded
         this.router.navigated = false;
         // if you need to scroll back to top, here is the right place
         window.scrollTo(0, 0);
      }
  });
  }
  tasks:Object
  ngOnInit() {

   this.taskservice.getAllTasks().subscribe((res) =>{
   this.tasks=res
    console.log(res)
    console.log("tasks load from server "+this.tasks)

    });
   //
  }


  public newTaskClick()
  {

    this.router.navigate(['taskreg'])
    // console.log(this.cookieService.get('username'))
    // console.log(this.cookieService.get('password'))
  }

  public taskDesc(id:string)
  {
    alert("this is task id "+id);
  }

  public deleteTaskByid(id:string)
  {
    alert('task for delete id is '+id)
    this.taskservice.deleteTask(id).subscribe((res) => {
      console.log('task deleted'+res)
      this.ngOnInit();
      this.pageRelod()

      });
  }

  public TaskUpdateButton(task:Object ,id:string)
  {
    alert("task id for update the task "+id)
  }
  public  pageRelod()
  {
    window.location.href="/admin"
   // window.location.reload()
  }



}
