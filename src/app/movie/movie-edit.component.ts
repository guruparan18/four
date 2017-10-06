import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { MovieService }  from './movie.service';
import { Movie } from './movie';

@Component({
  templateUrl: './movie-new.component.html',
  styleUrls: ['./movie-new.component.css']
})
export class MovieEditComponent implements OnInit {  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService
  ) {};
  
  public pageAction = "Edit";
  public model = Object(); //this.movieService.defaultMovie();
  movie: Movie;

  ngOnInit() {
    this.route.params
      // (+) converts string 'id' to a number
      //.switchMap((params: Params) => this.service.getMovie(+params['id']))
      .switchMap((params: Params) => this.movieService.getMovieWithName(params['name']))
      .subscribe((movie: Movie[]) => this.model = movie[0]);

      //this.model = this.movie;
      console.log("Loaded Movie");
      console.log(this.model);
      //console.log(this.movie);
  };
  onSubmit() { 

  this.model = this.movieService.vetMovie(this.model);

  var movieItem = new Movie( this.model.id, this.model.name, this.model.displayName
                             , this.model.displayShortLine, this.model.actors, this.model.director
                             , this.model.poster_url, this.model.trailer_url, this.model.tags);
    
  this.movieService.putMovie(movieItem.name, movieItem);
                    //.then(movies => this.model = movies );
    
  setTimeout(this.router.navigate(['/movies', this.model.name]), 2000);
    //console.log("DONE");
    //console.log(movieItem);
  };
  /*
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
  */
};
