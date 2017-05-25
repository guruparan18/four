import { Component } from '@angular/core';

//@HostBinding('@routeAnimation') routeAnimation = true;
//@HostBinding('style.display')   display = 'block';
//@HostBinding('style.position')  position = 'absolute';

@Component({
  template: `
    <h2>MOVIES</h2>
    <p>All the movies</p>

    <button routerLink="/movies/new">New Movies</button>
  `
})
export class MovieDetailComponent { }
