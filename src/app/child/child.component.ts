import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
   @Input() data: string;
  fromchild: string = 'From child to parent';
  @Output() childOutput:EventEmitter<string>= new EventEmitter();

  constructor() { }

   ngOnInit() {
   console.log('from parent', this.data);
   }
   senddata() {
    this.childOutput.emit(this.fromchild);
  }

  

}
