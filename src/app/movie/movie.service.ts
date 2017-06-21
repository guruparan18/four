import { Injectable } from '@angular/core';
import { Http, Response }          from '@angular/http';
 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Movie } from './movie';
import { MOVIES } from './mock-movies';

let moviesPromise = Promise.resolve(MOVIES);

@Injectable()
export class MovieService {

  private heroesUrl = 'api/movies';  // URL to web API
 
  constructor (private http: Http) {}

  getMovies(): Promise<Movie[]> {
    return Promise.resolve(MOVIES);
  }

  getMovie(id: number | string) {
    return moviesPromise
      .then(movies => movies.find(movie => movie.id === +id));
  }

  // See the "Take it slow" appendix
  getMoviesSlowly(): Promise<Movie[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getMovies()), 2000);
    });
  }
}
