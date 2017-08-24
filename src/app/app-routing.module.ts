import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { UserComponent } from './user/user.component';
import { MovieComponent } from './movie/movie.component';
import { MovieListComponent } from './movie/movie-list.component'
import { PageNotFoundComponent } from './not-found.component'

const appRoutes: Routes = [
  { path: 'user', component: UserComponent },
  { path: '', redirectTo: '/movies', pathMatch: 'full' },  
  //{ path: 'movies/new', redirectTo: '/movies/new', pathMatch: 'full' },  
  //{ path: '', redirectTo: '/movies', pathMatch: 'full' },
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
