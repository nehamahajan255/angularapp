import { Component, OnInit } from '@angular/core';
import { DemoService } from '../sevices/demo.service';

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

constructor(private demo :DemoService) { }

  ngOnInit() {
    // this.demo.getUsers().subscribe((data=>{
    //   console.log('from comp2',data);
      
    // }))
  }
  show (event:any) {
console.log(`event`,event.target.innerHTML);
  }
  // show() {
  //   alert('method called')
  // }
}
 