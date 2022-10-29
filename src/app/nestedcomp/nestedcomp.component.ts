import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nestedcomp',
  templateUrl: './nestedcomp.component.html',
  styleUrls: ['./nestedcomp.component.css']
})
export class NestedcompComponent implements OnInit {
name:string='Neha';
lastName:string='Mahajan';
gender:string='Female';


  constructor() { }

  ngOnInit() {
  }

}
