import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-simpletemplet',
  templateUrl: './simpletemplet.component.html',
  styleUrls: ['./simpletemplet.component.css']
})
export class SimpletempletComponent implements OnInit {
  defaultValue:string="Angular";
  genders = [
    { id : '1', value: 'Male'},
    {id : '2', value: 'Female'}
  ]
  defaultGender = 'Male';
  formData = {
    username: '',
    email: '',
    course: '',
    gender: ''
  }

  constructor() { }
username:string="";

  ngOnInit() {
  }
  submitted=false;
  OnSubmit(form:NgForm) {
    this.submitted = true;
      this.formData.username =  form.value.userDetail.username ;
      this.formData.email = form.value.userDetail.email;
      this.formData.course = form.value.course;
      this.formData.gender = form.value.gender;
    // api saveData(fromData);
    form.reset();

    form.controls['course'].setValue('Angular');
    form.controls['gender'].setValue('Male');
  }
  checkEmail(email){
    console.log(email.value);
    const domain=email.value.substring(email.value.lastIndexOf('@, +1'))
  }
}