import { Component, OnInit } from '@angular/core';

import {MoviesService} from '../../service/movies.service'
import { NgForm } from '@angular/forms';
import { IMovie } from 'src/app/models/imovie.model';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
  providers: [MoviesService]
})
export class AddMovieComponent implements OnInit {

  constructor(private movieService: MoviesService) { }

  ngOnInit() {
  }

  addMovie(form: NgForm){
    this.movieService.postMovie(form.value)
    .subscribe(res => {
      console.log(res)
    })
  }

  //method to reset the form
  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.movieService.selectedMovie = new IMovie();
    }
  }
}
