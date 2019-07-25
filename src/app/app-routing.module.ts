import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AppComponent } from './app.component';
import { CommentComponent } from './comment/comment.component';
import { EmpLoginComponent } from './emp-login/emp-login.component';
import { EmpRegistrationComponent } from './emp-registration/emp-registration.component';
import { TaskDescComponent } from './task-desc/task-desc.component';
import { TaskReasignComponent } from './task-reasign/task-reasign.component';
import { TaskRegisterComponent } from './task-register/task-register.component';
import { TaskupdateComponent } from './admin_control/taskupdate/taskupdate.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { UsermangementComponent } from './admin_control/usermangement/usermangement.component';

const routes: Routes = [

  { path: 'reg',   component: EmpRegistrationComponent },
  { path: 'login',  component: EmpLoginComponent },
  { path: 'about',  component: AboutComponent },
  { path: 'uspan',  component: UserPanelComponent },
  { path: 'admin',   component: AdminPanelComponent },
  { path: 'taskdesk', component: TaskDescComponent },
  { path: 'taskreg',  component: TaskRegisterComponent },
  { path: 'comment',  component: CommentComponent } ,
  {path: 'usermanagement', component: UsermangementComponent},
  {path: 'updatetask', component: TaskupdateComponent},
  {path: 'reasigntask' , component: TaskReasignComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
