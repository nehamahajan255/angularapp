import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  value:string;
  entity:any;
  userName: any;
  constructor() {
 
   }

  ngOnInit() {
  }
  show (event:any) {
this.entity=event.entity;
  }
      deleteValue(val){
        this.value=val.value;

      }
}


