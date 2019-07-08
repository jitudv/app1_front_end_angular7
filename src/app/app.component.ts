import * as $ from 'jquery';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'sheduleapp';
  ngOnInit(): void {

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



  }


}
