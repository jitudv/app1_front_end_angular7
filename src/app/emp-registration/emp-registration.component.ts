import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Address } from 'src/models/Address';
import { Employee } from 'src/models/Employee';
import { Test1serviceService } from 'src/services/employeeservice.service';
import { UtilService } from 'src/services/util.service';
import { ɵKeyEventsPlugin } from '@angular/platform-browser';

@Component({
  selector: 'app-emp-registration',
  templateUrl: './emp-registration.component.html',
  styleUrls: ['./emp-registration.component.css']
})
export class EmpRegistrationComponent implements OnInit {
  regForm: FormGroup;
  name: string
  departments: any

  // moodel class objects
  address: Address
  emp:Employee ;

  constructor(private utilService: UtilService, private  empservice:Test1serviceService) { }

  ngOnInit() {
    this.regForm = new FormGroup({
      name: new FormControl(''),
      lastname: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      password_match: new FormControl(''),
      dob: new FormControl(''),
      mobno: new FormControl(''),
      house: new FormControl(''),
      colony: new FormControl(''),
      pincode: new FormControl(''),
      city: new FormControl(''),
      gender: new FormControl(''),
      department: new FormControl(''),
    });



    // // it will fetch all the departments from the server
    this.utilService.getDepartments().subscribe((res) => {
      this.departments = res
      // for(let i of this.departments)
      // {
      //   console.log(i.id)
      // }
      //console.log(res)
    });



    //console.log(" hey this  is departments  object "+res)

  }

  onSubmit(): void {
    //console.log(this.regForm.value)

       this.address = new Address(this.regForm.value.pincode,this.regForm.value.house,this.regForm.value.city,this.regForm.value.colony);
       this.emp = new Employee(this.regForm.value.name,this.regForm.value.lastname,this.regForm.value.email,this.regForm.value.password,this.regForm.value.mobno,this.regForm.value.dob,this.regForm.value.gender,this.regForm.value.empid);
       this.emp.setAddress(this.address);
       //console.log('value of the  employee object '+this.emp)
       //alert("yes you submit your form " + this.regForm.value.department);
       this.empservice.saveEmployee(this.emp ,this.regForm.value.department).subscribe((res) => {console.log(res)})
       // console.log(this.emp);
    }

}
