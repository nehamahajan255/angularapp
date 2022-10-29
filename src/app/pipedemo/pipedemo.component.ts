import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {
  presentDate = new Date();
  dob:string="18/11/1997"
  todayDate:string="2022/10/18"
  name = "codemind"; //upperase
  price = 10000;
  salary=23000;
  myObservable: any;
per:number=0.102324;


  constructor() { }
ngOnDestroy(){

}
  ngOnInit() {
    console.log(this.presentDate);
    this.myObservable = of('This is my custom observable').pipe(delay(3000));
  }

}
