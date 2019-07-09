import { Component, OnInit, ResolvedReflectiveFactory } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { config, fromEventPattern } from 'rxjs';

import { AppConstant } from 'src/models/AppConstant';
import { Login } from 'src/models/Login';
import { LoginLogoutService } from 'src/services/login-logout.service';
import { log } from 'util';

class Credentials {
  // username:String
  // password:String
  // temp  class for  store user credentials
  constructor(public username: string, public password: string) { } //  empty Constructor

}

@Component({
  selector: 'app-emp-login',
  templateUrl: './emp-login.component.html',
  styleUrls: ['./emp-login.component.css']
})
export class EmpLoginComponent implements OnInit {

  constructor(private loginlogout: LoginLogoutService, private router: Router) { }   // this is empty constructor

  get formControls() { return this.loginForm.controls; }
  static loginAuthentication: boolean = false
  public static credentials: Credentials;
  isSubmitted: boolean = false
  loginForm: FormGroup;
  public username: String
  public password: String

  // password: string;
  // email: string;
  // formControls=this.loginForm.



  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('jitudv09@gmail.com', Validators.email),
      password: new FormControl('Jays@123', Validators.requiredTrue),
    })
  }
  public formSubmit() {
    //alert("yes its working ")
    EmpLoginComponent.credentials = new Credentials(this.loginForm.value.email, this.loginForm.value.password);
    //console.log(EmpLoginComponent.credentials);
    // console.log(this.username ,this.password);
    this.login(EmpLoginComponent.credentials);

  }
  login(credentials: Credentials) {

    // this.credentials.username = this.loginForm.value.email;
    // this.credentials.password = this.loginForm.value.password;


    // console.log(" this is what  we are ate the login component  login method " + credentials.password + "\t" + credentials.username)
    this.loginlogout.userLogin(credentials.username, credentials.password).subscribe((res) => {

      const mapped = Object.keys(res).map(key => ({ type: key, value: res[key] }));  // convert an object to an array so that we can avoid errors

      AppConstant.USER_NAME = mapped[2].value;
      AppConstant.PASSWORD = mapped[1].value;
      AppConstant.USER_ROLE = mapped[1].value;
      // console.log("one position "+mapped[1].value)
      // console.log("second position "+mapped[2].value)
      // console.log("0  position"+mapped[0].value)


      if (mapped[1].value == 'ADMIN')
      {

        this.router.navigate(['admin']);
      }
      else if (mapped[1].value == "USER")
      {
        this.router.navigate(['uspan']);
      }
      else {
        this.router.navigate(['login']);
      }
      // this.router.navigate(['about']);
    });
  }

  loginSucess() {

  }



}
