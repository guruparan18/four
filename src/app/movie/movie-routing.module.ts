import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieNewComponent }     from './movie-new.component';
import { MovieEditComponent }  from './movie-edit.component';
import { MovieListComponent }    from './movie-list.component';
import { MovieDetailComponent }  from './movie-detail.component';

const movieRoutes: Routes = [
  { path: 'movies',  component: MovieListComponent },
  { path: 'movies/new', component: MovieNewComponent },    
  { path: 'movies/:name', component: MovieDetailComponent },
  { path: 'movies/:name/edit', component: MovieEditComponent }
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
