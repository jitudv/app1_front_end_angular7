import { DatePipe, LocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AboutComponent } from './about/about.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommentComponent } from './comment/comment.component';
import { CookieService } from 'ngx-cookie-service';
import { DeleteuserComponent } from './admin_control/deleteuser/deleteuser.component';
import { EmpLoginComponent } from './emp-login/emp-login.component';
import { EmpRegistrationComponent } from './emp-registration/emp-registration.component';
import { NgModule } from '@angular/core';
import { TaskDescComponent } from './task-desc/task-desc.component';
import { TaskRegisterComponent } from './task-register/task-register.component';
import { TaskupdateComponent } from './admin_control/taskupdate/taskupdate.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { UserlistComponent } from './admin_control/userlist/userlist.component';
import { UsermangementComponent } from './admin_control/usermangement/usermangement.component';
import { TaskReasignComponent } from './task-reasign/task-reasign.component';
import { SheduledtaskComponent } from './sheduledtask/sheduledtask.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpRegistrationComponent,
    EmpLoginComponent,
    AboutComponent,
    UserPanelComponent,
    AdminPanelComponent,
    TaskDescComponent,
    TaskRegisterComponent,
    CommentComponent,
    UsermangementComponent,
    DeleteuserComponent,
    UserlistComponent,
    TaskupdateComponent,
    TaskReasignComponent,
    SheduledtaskComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,



  ],
  providers: [CookieService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
