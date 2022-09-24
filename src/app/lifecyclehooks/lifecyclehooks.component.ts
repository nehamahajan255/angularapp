import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecyclehooks',
  templateUrl: './lifecyclehooks.component.html',
  styleUrls: ['./lifecyclehooks.component.css']
})
export class LifecyclehooksComponent implements OnInit , OnChanges , DoCheck , AfterContentInit ,
 AfterContentChecked , AfterViewInit{
@Input()
 data:string;
  constructor() { 
    console.log("constructor call");
    
  }
  ngAfterContentChecked(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
    console.log("ngoninit call");
    
  }
ngOnChanges(): void {
  console.log("ngonchanges call");
}
ngDoCheck(): void {
  console.log("ngdocheck call");
  
}
ngAfterContentInit(): void {
  console.log("ngAfterContentInit call");
}
ngAfterContentCheck(): void{
  console.log("ngAfterContentCheck call");
}
ngAfterViewInit(): void{
  console.log("ngAfterViewInit call");
}
ngAfterViewCheck(): void{
  console.log("ngAfterViewCheck call");
}
}
