import { Component, OnInit } from '@angular/core';
import { DemoService } from '../sevices/demo.service';

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
education :string=''; //two way data binding
  constructor(private demo : DemoService) {

   }

  ngOnInit() {
    this.demo.getPosts().subscribe((data =>{
      console.log('from comp 3',data);
      
    }));
    // this.demo.creatPost("this is new post from comp2").subscribe((data=>{
    //   console.log(data);
      
    // }));
  }
  binding (event:any) {
    console.log(`event`,event.target.innerHTML);
      }
 show() {
       alert('method called')
} 
}
