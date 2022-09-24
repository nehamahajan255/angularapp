import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  condition:boolean=true;
  title = 'angularapp';
value:string;
isShow:boolean = true;
  GetValueFromChild(value) {
    console.log(value);
  }
  submitValue(val){
    this.value=val.value
  }
  OnDestory() {
    this.isShow = false;
  }


}
