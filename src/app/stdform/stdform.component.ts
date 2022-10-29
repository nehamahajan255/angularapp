import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-stdform',
  templateUrl: './stdform.component.html',
  styleUrls: ['./stdform.component.css']
})
export class StdformComponent implements OnInit {
  defaultValue:string="chooseCourses";
  chooseCourses:any="choose"
  courses:any=['Automobile Engg' , 'Chemical Engg' , 'Computer Engg' , 'Electronics and Tele Engg' , 'Mechanical Engg' ];
  //   {nm:"Automobile Engg"},
  //   {nm : "Chemical Engg"},
  //   {nm : "Computer Engg"},
  //   {nm : "Electronics and Tele Engg"},
  //   {nm : "Mechanical Engg"}
  // ]
   formDetails ={
    firstName:'',
    lastName: '',
    coueseName: '',
    gender:'',
    contactNumber:'',
    emailId: '',
    password: '',
    reEnterPass: ''

 }
  constructor() { }

  ngOnInit() {
  }
  submitted=false;
  OnSubmit(form:NgForm){
    // console.log(form.value);
    this.submitted=true;
    this.formDetails.firstName =  form.value.userDetail.firstName ;
    this.formDetails.lastName = form.value.userDetail.lastName;
    this.formDetails.coueseName = form.value.userDetail.coueseName;
    this.formDetails.gender = form.value.userDetail.gender;
    this.formDetails.contactNumber = form.value.userDetail.contactNumber;
    this.formDetails.emailId = form.value.userDetail.emailId;
    this.formDetails.password = form.value.userDetail.password;
    this.formDetails.reEnterPass = form.value.userDetail.reEnterPass;

      }
      
}
 
