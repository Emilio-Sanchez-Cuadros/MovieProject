import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  sections = [
    {Title: "Trainspotting",
    Genre: "Drama",
    Status: "Favorita"},
    {Title: "Lord of the Rings",
    Genre: "Historical",
    Status: "Vista",},
    {Title: "Harry Potter",
    Genre: "Fiction",
    Status: "Pendiente"},
    {Title: "Trainspotting",
    Genre: "Drama",
    Status: "Favorita"},
    {Title: "Lord of the Rings",
    Genre: "Historical",
    Status: "Vista",},
    {Title: "Harry Potter",
    Genre: "Fiction",
    Status: "Pendiente"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
