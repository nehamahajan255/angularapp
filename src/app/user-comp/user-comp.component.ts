import { Component, OnInit } from '@angular/core';
import { UsersService } from '../userSevice/users.service';

@Component({
  selector: 'app-user-comp',
  templateUrl: './user-comp.component.html',
  styleUrls: ['./user-comp.component.css']
})
export class UserCompComponent implements OnInit {

  constructor(private demo: UsersService ) { }
users={};
  ngOnInit() {
    // fetch('https://jsonplaceholder.typicode.com/users')
    this.users=this.demo.user;
    this.demo.getUsers().subscribe((data=>{
      this.users=data;
      
  }))
  }
}