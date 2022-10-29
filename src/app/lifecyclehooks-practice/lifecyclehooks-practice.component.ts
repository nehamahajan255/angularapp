import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecyclehooks-practice',
  templateUrl: './lifecyclehooks-practice.component.html',
  styleUrls: ['./lifecyclehooks-practice.component.css']
})
export class LifecyclehooksPracticeComponent implements OnInit {
userText:string='Neha';
  constructor() { }

  ngOnInit() {
  }

}
