import { Component, OnInit } from '@angular/core';
import { DemoService } from './sevices/demo.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

heading:string="Students details for nested obj" //nesting
 
condition:boolean=true;
  title = 'angularapp';
value:string;
isShow:boolean = true;
products = {};
applyStyleClass:boolean=true;
classeToApply:string="colorStyleClass boldStyleClass obliqueStyleClass"

public msg:string=" "

hooks: string='lifecycle hook pactice';


employees:any=[
  {name:'neha' , gender:'female', comp:'TCS'},
  {name:'vinay' , gender:'male', comp:'wipro'},
  {name:'abc' , gender:'female', comp:'infosys'},
  {name:'vikas' , gender:'male', comp:'yash'}
]
// for custome pipe
constructor (private demo: DemoService){

}


// createPost(input:HTMLInputElement){
//   let post = { title : input.value};
//   this.demo.createPost(post).subscribe((res: any) => {
//     console.log('createPost', res);
//   this.products =res;
//   })
//     }
  
ngOnInit(): void {
  // this.demo.hello();
  this.products = this.demo.product;  
  this.demo.getUsers().subscribe((data =>{
    this.products= data;
  }))
}
  GetValueFromChild(value) {
    console.log(value);
  }
  submitValue(val){
    this.value=val.value
  }
  OnDestory() {
    this.isShow = false;
  }
onClick(){
  console.log('button click');
  this.msg="welcome here";
  
}

}
