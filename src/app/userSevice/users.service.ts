import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { devAPIUrl } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
user:any[]=['id' ,'name','username','email','address','geo'];
  
  constructor(private uTable:HttpClient ) { }
  getUsers(): Observable<any> {
    return this.uTable.get(`${devAPIUrl}users`);
   }
   getPosts(): Observable<any> {
    return this.uTable.get(`${devAPIUrl}posts`);
  }

  // checkUserNamePassword(uname:string , pwd:string){
  //   if(uname=="admin") && pwd=='admin123'
  // }
}