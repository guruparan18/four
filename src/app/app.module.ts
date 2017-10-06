import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { MovieRoutingModule } from './movie/movie-routing.module';
import { HttpModule }    from '@angular/http';
//import { UserHomeRoutingModule }      from './user/user-routing.module';

import { AppComponent } from './app.component';
import { MovieModule } from './movie/movie.module';

import { UserComponent } from './user/user.component';
import { PageNotFoundComponent } from './not-found.component';
import { MovieService} from './movie/movie.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MovieModule,
    HttpModule,
//    UserHomeRoutingModule,
    AppRoutingModule,
    MovieRoutingModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
