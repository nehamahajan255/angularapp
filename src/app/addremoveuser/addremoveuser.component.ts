import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addremoveuser',
  templateUrl: './addremoveuser.component.html',
  styleUrls: ['./addremoveuser.component.css']
})
export class AddremoveuserComponent implements OnInit {

  users=[];
  constructor() { }

  ngOnInit() {
  }

  onCreateUser(uname){

     this.users.push({
      name: uname.value
     })

  }
  onRemoveItem(item){
    this.users.splice(item,1);
  }
}