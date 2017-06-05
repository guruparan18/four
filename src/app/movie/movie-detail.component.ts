import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { MovieService }  from './movie.service';
import { Movie } from './movie';

@Component({
  templateUrl: './movie-detail.component.html'
})
export class MovieDetailComponent implements OnInit {  
  movie: Movie;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: MovieService
  ) {}
  ngOnInit() {
    this.route.params
      // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.service.getMovie(+params['id']))
      .subscribe((movie: Movie) => this.movie = movie);
  }
  gotoMovies() {
    let movieId = this.movie ? this.movie.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    //this.router.navigate(['/movies', { id: movieId, foo: 'foo' }]);
    this.router.navigate(['/movies']);
  }
  editMovies(){
    let movieId = this.movie ? this.movie.id : null;
    this.router.navigate(['/movies/edit',  movieId]);
  }
}
