import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent }    from './movie-list.component';
import { MovieDetailComponent }  from './movie-detail.component';
const movieRoutes: Routes = [
  { path: 'movies',  component: MovieListComponent },
  { path: 'movie/:id', component: MovieDetailComponent }
];
@NgModule({
  imports: [
    RouterModule.forChild(movieRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MovieRoutingModule { }
