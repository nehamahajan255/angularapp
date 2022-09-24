import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {

colorVal=`blue`;
Employee: any []=[
  { 'name': "Sarthak" , 'compNm': "TCS" , 'salary': "34000"},
  { 'name': "Sneha" , 'compNm':"Wipro" , 'salary': "77000"},
  { 'name': "Vikas" , 'compNm':"Infosys" , 'salary': "90000"},
  { 'name': "Raj" , 'compNm':"capgemni" , 'salary': "80000"},
  { 'name': "Swara" , 'compNm':"Wipro" , 'salary': "88000"},


]
  constructor() { }

  ngOnInit() {
  }

}
