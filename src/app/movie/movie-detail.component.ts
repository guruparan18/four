import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import 'rxjs/add/operator/switchMap';

import { MovieService }  from './movie.service';
import { Movie } from './movie';

@Component({
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {  
  movie: Movie;
  public trailerURL :SafeUrl;
//  public trailerURL :String;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService,
    private sanitizer: DomSanitizer
  ) {};
  
  //this.trailerURL = "https://www.youtube.com/embed/"+ this.movie.trailer_url +"?rel=0&amp;controls=0&amp;showinfo=0";
  buildURL(){
    this.trailerURL = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+ this.movie.trailer_url +"?rel=0&amp;controls=0&amp;showinfo=0");
    console.log(this.trailerURL);
  };

  getMovies() {
    this.route.params
    // (+) converts string 'id' to a number
    //.switchMap((params: Params) => this.service.getMovie(+params['id']))
    .switchMap((params: Params) => this.movieService.getMovieWithName(params['name']))
    .subscribe((movie: Movie[]) => { 
      this.movie = movie[0];
      this.buildURL();
    });
  };

  ngOnInit() {
    this.getMovies();
    // this.trailerURL = this.sanitizer.bypassSecurityTrustUrl(this.movie.trailer_url);  
  };

  gotoMovies() {
    let movieId = this.movie ? this.movie.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    //this.router.navigate(['/movies', { id: movieId, foo: 'foo' }]);
    this.router.navigate(['/movies']);
  };
  
  editMovies(){
    let movieId = this.movie ? this.movie.id : null;
    this.router.navigate(['/movies/edit',  movieId]);
  };
  
  deleteMovie(){
    let movieName = this.movie ? this.movie.name : null;
    this.movieService.deleteMovie(movieName);
    this.router.navigate(['/movies']);
  };

};