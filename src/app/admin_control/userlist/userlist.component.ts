import { Component, OnInit } from '@angular/core';

import { Test1serviceService } from 'src/services/employeeservice.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(private empservice: Test1serviceService ) { }
  public emps: object;
  ngOnInit() {

     this.empservice.getAllEmplolyee().subscribe((res) => {
      this.emps = res;
      console.log(this.emps);
    });
  }

  public deleteEmployee(id:string)
  {
    this.empservice.deleteEmployee(id).subscribe(res =>{
      console.log(res)
;    })
  }

}
