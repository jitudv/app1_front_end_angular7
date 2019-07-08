import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AppComponent } from './app.component';
import { EmpLoginComponent } from './emp-login/emp-login.component';
import { EmpRegistrationComponent } from './emp-registration/emp-registration.component';
import { NgModule } from '@angular/core';
import { TaskDescComponent } from './task-desc/task-desc.component';
import { UserPanelComponent } from './user-panel/user-panel.component';

const routes: Routes = [
  {path:"reg" ,component:EmpRegistrationComponent},
  {path:"login",component:EmpLoginComponent},
  {path:"about" ,component:AboutComponent},
  {path:"uspan",component:UserPanelComponent},
  {path:"admin" ,component:AdminPanelComponent},
  {path:"task-desc",component:TaskDescComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
