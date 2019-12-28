import { Component, OnInit } from '@angular/core';

import {MoviesService} from '../../service/movies.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [MoviesService]
})
export class HomeComponent implements OnInit {


  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    const pelis = this.movieService.getMovies().subscribe(res=> console.log(res))
    console.log(pelis)
  }



}
