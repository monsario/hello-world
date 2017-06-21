import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesComponent } from './movies.component';
import { MovieListComponent } from './movie-list.component';

@NgModule( {
  imports      : [ CommonModule ],
  exports     : [ MoviesComponent ],
  declarations: [ MoviesComponent, MovieListComponent ]
} )
export class MoviesModule {
}

