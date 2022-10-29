import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { Output, EventEmitter } from 'eventemitter3';

@Component({
  selector: 'app-practiceform',
  templateUrl: './practiceform.component.html',
  styleUrls: ['./practiceform.component.css']
})
export class PracticeformComponent implements OnInit {
  @Input() form='';
  @Input() employee:any[]=[
    {empName:'lshg',empID:'sdg',Department:'sdgs',salary:'seges'},
    {empName:'Sneha',empID:'srf',Department:'IT',salary:'jhgj'}
  ]
  @Output () dept:EventEmitter<any> =new EventEmitter ();
//  @Output () dept:new EventEmitter<any> ();
// @Output() RemoveChild:EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  addDept (value:any) {
    this.dept.emit(value);
  }
  addItem(newDept: any) {
    console.log(newDept);
     
  }

}
