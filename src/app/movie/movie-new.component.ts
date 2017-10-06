import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Movie }    from './movie';
import { MovieService }  from './movie.service';

@Component({
  selector: 'movie-new',
  templateUrl: './movie-new.component.html',
  styleUrls: ['./movie-new.component.css']
})
export class MovieNewComponent {
  constructor (
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) {};

  public pageAction = "New";
  model = this.movieService.defaultMovie();
  retStatus = "";
  submitted = false;

  onSubmit() { 
    this.submitted = true;

    this.model = this.movieService.vetMovie(this.model);

    var movieItem = new Movie( this.model.id, this.model.name, this.model.displayName
                             , this.model.displayShortLine, this.model.actors, this.model.director
                             , this.model.poster_url, this.model.trailer_url, this.model.tags);
    
    this.movieService.postMovie(movieItem);
    
    setTimeout(this.router.navigate(['/movies', this.model.name]), 2000);
    //console.log("DONE");
    //console.log(movieItem);
  };

  newMovie() {
    this.model = this.movieService.defaultMovie();
  };
};