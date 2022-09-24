import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

type NewType = NgForm;

@Component({
  selector: 'app-simpletemplet',
  templateUrl: './simpletemplet.component.html',
  styleUrls: ['./simpletemplet.component.css']
})
export class SimpletempletComponent implements OnInit {
  defaultValue:string="Angular"
  constructor() { }

  ngOnInit() {
  }
  OnSubmit(form:NgForm){
    console.log(form.value);
    
      }

}
