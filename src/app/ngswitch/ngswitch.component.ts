import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {
  selectedCountry:string;
  constructor() { }

  ngOnInit() {
  }
  getCountry(value){
    console.log(value.target.value);
    this.selectedCountry=value.target.value;
    
  }

}
