import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
name: string="codemind";
description:string="this is angular data binding"
imageUrl = 'https://www.freecodecamp.org/news/content/images/size/w2000/2020/04/Copy-of-Copy-of-Travel-Photography.png';

  lastName : string = "Angularbinding"

constructor() { }

  ngOnInit() {
  }
  show (event:any) {
console.log(`event`,event.target.innerHTML);
  }
  // show() {
  //   alert('method called')
  // }
}
 