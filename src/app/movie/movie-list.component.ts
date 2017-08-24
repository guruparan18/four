import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
//import { Observable } from 'rxjs/Observable';

import { Movie } from './movie';
import { MovieService }  from './movie.service';


@Component({
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[];
  errorMessage: string;
  private selectedId: number;

  constructor (
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() { this.getMovies(); }

  getMovies() {
    this.movieService.getMovies()
                     .then(
                       movies => this.movies = movies,
                       error =>  this.errorMessage = <any>error);
  }

  //isSelected(movie: Movie) { return movie.id === this.selectedId; }

  onSelect(movie: Movie) {
    this.router.navigate(['/movies', movie.id]);
  }

}
//export class MovieListComponent { }
