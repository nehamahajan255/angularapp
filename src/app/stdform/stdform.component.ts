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

  constructor() { }

  ngOnInit() {
  }
  OnSubmit(form:NgForm){
    console.log(form.value);

      }
      
}
 
