import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import { Movie } from './movie';
import { MovieService }  from './movie.service';


@Component({
template: `
  <h2>MOVIES</h2>
  <ul class="items">
    <li *ngFor="let movie of movies | async"
      [class.selected]="isSelected(movie)"
      (click)="onSelect(movie)">
      <span class="badge">{{ movie.id }}</span> {{ movie.name }}
    </li>
  </ul>

  <button routerLink="/movies/new">New Movies</button>
  `
})
export class MovieListComponent implements OnInit {
  movies: Observable<Movie[]>;
  private selectedId: number;
  constructor(
    private service: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.movies = this.route.params
      .switchMap((params: Params) => {
        this.selectedId = +params['id'];
        return this.service.getMovies();
      });
  }

  isSelected(movie: Movie) { return movie.id === this.selectedId; }

  onSelect(movie: Movie) {
    this.router.navigate(['/movies', movie.id]);
  }

}
//export class MovieListComponent { }
