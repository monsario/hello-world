import { Component } from '@angular/core';
import { movieData } from './movies-data';
import{ Movie } from './Movie';

@Component( {
  moduleId   : module.id,
  selector   : 'c1-movies',
  templateUrl: 'movies.component.html'
} )
export class MoviesComponent {
  movies: Movie[] = movieData;

  parentMovieSelect( movie: Movie ) {
    console.log('arguments: ', arguments);
    console.log('MoviesComponent: You clicked on ' + movie.title);
  }
}
