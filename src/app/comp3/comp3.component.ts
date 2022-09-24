import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {
name:string= "Neha "
description:string="Iam going through Angular Training";
imageUrl="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"
lastName:string="Mahajan"
  constructor() { }

  ngOnInit() {
  }
  binding (event:any) {
    console.log(`event`,event.target.innerHTML);
      }
      show() {
       alert('method called')
} 
}
