import { Component, OnInit } from '@angular/core';

import { AppConstant } from 'src/models/AppConstant';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  constructor( private  router:Router , private cookieService:CookieService){ }

  ngOnInit() {}

  public newTaskClick()
  {

    this.router.navigate(['taskreg'])
    // console.log(this.cookieService.get('username'))
    // console.log(this.cookieService.get('password'))

  }
}
