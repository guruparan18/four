import { Injectable } from '@angular/core';
import { Headers, Http, Response }          from '@angular/http';
 
//import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Movie } from './movie';
//import { MOVIES } from './mock-movies';

//let moviesPromise = Promise.resolve(MOVIES);

@Injectable()
export class MovieService {

  private moviesUrl = 'http://localhost:3000/movies';  // URL to web API
 
  constructor (private http: Http) {}

  getMovies(): Promise<Movie[]> {
    return this.http
               .get(this.moviesUrl)
               .toPromise()
               .then(this.extractData) //response => response.json().data as Movie[])
               //.then(response => response.json().data as Movie[])
               //.map(response => response.json().data as Movie[])
               .catch(this.handleError);

    //console.error("response.json()");               
  };

  getMovieWithName(movieName: string): Promise<Movie[]> {
    return this.http
               .get((this.moviesUrl+"/"+movieName))
               .toPromise()
               .then(this.extractData) //response => response.json().data as Movie[])
               //.then(response => response.json().data as Movie[])
               //.map(response => response.json().data as Movie[])
               .catch(this.handleError);
  };

  private extractData(res: Response) {
    let body = res.json();
    //console.log(body);
    return body || { };
  };

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
 }

  /*getMoviesOld(): Promise<Movie[]> {
    return Promise.resolve(MOVIES);
  }*/
/*
  getMovie(id: number | string) {
    return moviesPromise
      .then(movies => movies.find(movie => movie.id === +id));
  }
*/
  // See the "Take it slow" appendix
  getMoviesSlowly(): Promise<Movie[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getMovies()), 2000);
    });
  }
}
