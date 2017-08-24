import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { Headers, Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Movie } from './movie';

@Injectable()
export class MovieService {

  private moviesUrl = 'http://localhost:3000/movies';  // URL to web API
  private headers = new Headers({'Content-Type': 'application/json'});
 
  constructor (private http: Http) {}

  getMovies(): Promise<Movie[]> {
    return this.http
               .get(this.moviesUrl)
               .toPromise()
               .then(this.extractData) //response => response.json().data as Movie[])
               //.then(response => response.json().data as Movie[])
               //.map(response => response.json().data as Movie[])
               .catch(this.handleError);
  };

  getMovieWithName(movieName: string): Promise<Movie[]> {
    return this.http
               .get((this.moviesUrl + "/" + movieName))
               .toPromise()
               .then(this.extractData) //response => response.json().data as Movie[])
               .catch(this.handleError);
  };

  postMovie(movieItem : Movie) : Promise<Movie>{
    return this.http
          .post(this.moviesUrl, JSON.stringify(movieItem), {headers: this.headers})
          .toPromise()
          .then(res => res.json().data as Movie)
          //.then(res => res.json().RETURN_STATUS as string)
          .catch(this.handleError);
  };

  putMovie(movieName: string, movieItem : Movie) : Promise<Movie>{
    return this.http
          .put(this.moviesUrl + "/" + movieName, JSON.stringify(movieItem), {headers: this.headers})
          .toPromise()
          .then(res => res.json().data as Movie)
          //.then(res => res.json().RETURN_STATUS as string)
          .catch(this.handleError);
  };

  deleteMovie(movieName: string) : Promise<Response>{
    return this.http
          .delete(this.moviesUrl + "/" + movieName)
          .toPromise()
          //.then(res => res.json().data as Movie)
          //.then(res => res.json().RETURN_STATUS as string)
          .catch(this.handleError);
  };

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  };

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
 }
}
