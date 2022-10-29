import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {
  applyStyleClass:boolean=true;
  applyFontColor:boolean=true;
  applyFontStyle :boolean=true;
  people:any[] = [
    {'name': "Jack", 'country': "UK"},
    {'name': "Sumit", 'country': "USA"},
    {'name': "Anup", 'country': "HK"},
    {'name': "Codemind", 'country': "UK"},
    {'name': "Surya", 'country': "USA"}

  ]

  constructor() { }

  ngOnInit() {
  }
addStyle(){
var classes={
  boldStyle:this.applyStyleClass,
  fontColor:this.applyFontColor,
  fontStyle:this.applyFontStyle

};
return classes;
}
}
