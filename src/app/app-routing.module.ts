import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { UserComponent } from './user/user.component';
import { MovieComponent } from './movie/movie.component';
import { MovieListComponent } from './movie/movie-list.component'
import { PageNotFoundComponent } from './not-found.component'

const appRoutes: Routes = [
  { path: 'user', component: UserComponent },
//  { path: 'movie/:id',      component: MovieComponent },
//  { path: 'movies',  component: MovieListComponent, data: { title: 'Movies' } },
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
