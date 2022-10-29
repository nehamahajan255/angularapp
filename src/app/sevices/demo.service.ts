import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { devAPIUrl } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DemoService {
  // url:string='https://jsonplaceholder.typicode.com/'
  // postUrl:string='https://jsonplaceholder.typicode.com/posts'
  product = [
    {name: 'Laptop', id: '101'},
    {name: 'Mobile', id: '102'},
    {name: 'TV', id: '103'}
  ]
  http: any;
  constructor(private httpClient : HttpClient) { }
  // hello(){
  //   alert('it is class ABC');
  // }
  getUsers(): Observable<any> {
    return this.httpClient.get(`${devAPIUrl}users`);
   }
   getPosts(): Observable<any> {
     return this.httpClient.get(`${devAPIUrl}posts`);
   }
  //  createPost(post): Observable<any> {
  //   let endPoints = "posts";
  //   return this.http.post<any>(`${devAPIUrl+ endPoints}`, JSON.stringify(post));
  // }
//modify later on

}




