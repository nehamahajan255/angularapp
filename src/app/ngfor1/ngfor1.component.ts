import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor1',
  templateUrl: './ngfor1.component.html',
  styleUrls: ['./ngfor1.component.css']
})
export class Ngfor1Component implements OnInit {
  songs:Singer[]=[
      {singerNm:'Lata Mangeshkar',noSongs:`30`},
      {singerNm:'Arijit Singh',noSongs:`88`},
      {singerNm:'Shreya Ghoshal',noSongs:`121`},
      {singerNm:'Sonu Nigam',noSongs:`87`},
      {singerNm:'Alka Yagnik',noSongs:`50`}
      
    ]
  constructor() { }

  ngOnInit() {
  }

}
class Singer{
  singerNm:string;
  noSongs:string;
    }
  
  