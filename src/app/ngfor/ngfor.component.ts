import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {
title:string=`Top 3 bollywood movies `;
movies:Movie[]=[
  {title:`3 idiotes`,director:`RH`,cast:`A K`,releaseDate:`2009`},
  {title:`ABCD`,director:`hg`,cast:`S K`,releaseDate:`2002`},
  {title:`Dev`,director:`HG`,cast:`A D`,releaseDate:`2008`}

]
// songs:Singer[]=[
//   {singerName:'Shreya Ghoshal',noOfSongs:`60`},
//   {singerName:'Arijit Singh',noOfSongs:`75`},
//   {singerName:'Lata Mangeshkar',noOfSongs:`188`},
//   {singerName:'Sonu Nigam',noOfSongs:`45`},
//   {singerName:'Alka Yagnik',noOfSongs:`50`},
//   {singerName:'Kailash kher',noOfSongs:`47`}
// ]

  constructor() { }

  ngOnInit() {
  }

}
class Movie{
  title:string;
  director:string;
  cast:string;
  releaseDate:string;
}

// class Singer{
//   singerName:string;
//   noOfSongs:string;
//   }

