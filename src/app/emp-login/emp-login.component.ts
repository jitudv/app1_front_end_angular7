import { Component, OnInit, ResolvedReflectiveFactory } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { config, fromEventPattern } from 'rxjs';

import { AppComponent } from '../app.component';
import { AppConstant } from 'src/models/AppConstant';
import { CookieService } from 'ngx-cookie-service';
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

  constructor(private apcomponent:AppComponent,private loginlogout: LoginLogoutService, private router: Router , private cookieService:CookieService) { }   // this is empty constructor

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
      email: new FormControl('', Validators.email),
      password: new FormControl('', Validators.requiredTrue),
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

      AppConstant.USER_NAME = mapped[0].value;
      AppConstant.PASSWORD = mapped[2].value;
      AppConstant.USER_ROLE = mapped[1].value;
      AppConstant.USER_ID=mapped[3].value
      this.cookieService.set( 'username', AppConstant.USER_NAME);
      this.cookieService.set('password',AppConstant.PASSWORD)
      this.cookieService.set('userid',AppConstant.USER_ID)
      // this.cookieService.set( 'username', mapped[0].value);
      // this.cookieService.set('password',mapped[2].value)
      // console.log(this.cookieService.get('username'));
      // console.log(this.cookieService.get('password'));
      // console.log("user id is "+mapped[3].value)

      // console.log(" user  role is   one position "+mapped[1].value)
      // console.log(" user password is  second position "+mapped[2].value)
      // console.log(" user name is  email   position "+mapped[0].value)


      if (mapped[1].value == 'ADMIN')
      {
        this.loginSucess()
        this.router.navigate(['admin']);
      }
      else if (mapped[1].value == "USER")
      {
        this.loginSucess()
        this.router.navigate(['uspan']);
      }
      else {
        this.router.navigate(['login']);
      }
      // this.router.navigate(['about']);
    });
  }

  loginSucess()
  {
    this.cookieService.set('loginstatus','true');
    AppConstant.IS_LOGED_IN=JSON.parse(this.cookieService.get('loginstatus'))
    console.log("login status "+AppConstant.IS_LOGED_IN)
    this.apcomponent.updateAfterLogin();
   // AppComponent.isLoggedIn=true;

  }



}
