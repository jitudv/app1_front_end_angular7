import * as $ from 'jquery';

import { Component, OnInit } from '@angular/core';

import { AppConstant } from 'src/models/AppConstant';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public  isLoggedIn:boolean=false;
  constructor(private cookie:CookieService , private  router:Router){}
  title = 'sheduleapp';
  username:string="";


  ngOnInit(): void {
    this.isLoggedIn=JSON.parse(this.cookie.get('loginstatus'));
    $("#loginLink").click(function () {
      $("#loginLink").css("color", "red");
    });
     // this is the testing only link clicked


    $("#registrationLink").click(function () {
      // $("#loginLink").css("background-color","red");
      // alert("you clicked registration link ")
    })

    $("document").ready(function(){
      $("li").eq(2).css("color", "red");
    });
     this.username=this.cookie.get('username')

  }

  public updateAfterLogin()
  {
    this.ngOnInit();
  }

  public   logoutbt():void
  {
    //alert('you are now logout sir ')

    this.cookie.set('username','')
    this.cookie.set('password','')
    this.cookie.set('loginstatus','false')
    this.isLoggedIn=false;
    this.router.navigate(['/'])

  }



}
