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
  public pageAction = "New Movie";
  model = new Movie("Name", "Sample", "Display Name", "Sample Shortline"
                  , "Actors 1, Actors 2", "Director", "URL", "Trailer URL", "Tags"); //18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  retStatus = "";

  submitted = false;

  constructor (
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  onSubmit() { 
    this.submitted = true;

    this.model.name = this.model.name.trim();

    if (this.model.displayName === "Display Name") {
      this.model.displayName = this.model.name;
    }

    if (this.model.id === "Name"){
      this.model.id = this.model.name;
    }

    this.model.id = this.model.id.replace(" ", "");

    var movieItem = new Movie( this.model.id, this.model.name, this.model.displayName
                             , this.model.displayShortLine, this.model.actors, this.model.director
                             , this.model.poster_url, this.model.trailer_url, this.model.tags);
    
    this.movieService.postMovie(movieItem);
                    //.then(movies => this.model = movies );
    
    setTimeout(this.router.navigate(['/movies', this.model.name]), 2000);
    //console.log("DONE");
    //console.log(movieItem);
  }

  newMovie() {
    this.model = new Movie("NAME", "Sample", "Display Name", "Sample Shortline"
                         , "Actors 1, Actors 2", "Director", "URL", "Trailer URL", "Tags"); //18, 'Dr IQ', this.powers[0], 'Chuck Overstreet'); //(42, '', '');
  }
}