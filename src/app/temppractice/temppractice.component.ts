import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temppractice',
  templateUrl: './temppractice.component.html',
  styleUrls: ['./temppractice.component.css']
})
export class TemppracticeComponent implements OnInit {
  userForm={
    name:'',
    dept:'',
    alert:'',
    gender:'',
    city:'',
    sugessions:'',
    password:'',
    date:''
  }
  
  constructor() { }

  ngOnInit() {
  }
onSubmit(form ){
  console.log("onSubmit", form.valid);
  
}

}
