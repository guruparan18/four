import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { MovieListComponent }    from './movie-list.component';
import { MovieDetailComponent }  from './movie-detail.component';
import { MovieService } from './movie.service';
import { MovieRoutingModule } from './movie-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MovieRoutingModule,
  ],
  declarations: [
    MovieListComponent,
    MovieDetailComponent
  ],
  providers: [ MovieService ]
})
export class MovieModule {}
