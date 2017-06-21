import { Component, Input, EventEmitter, Output } from '@angular/core';

import { Movie } from './Movie';

@Component( {
  moduleId   : module.id,
  selector   : 'c1-movie-list',
  templateUrl: 'movie-list.component.html',
  styles     : [
      `tbody tr {
      cursor: pointer
    }

    tr.selectedMovie {
      background-color: yellow
    }`
  ]
} )
export class MovieListComponent {
  selectedMovie: Movie = null;

  @Input()
  movieList: Movie[] = [];

  @Output()
  movieSelect: EventEmitter<Movie> = new EventEmitter<Movie>();

  handleMovieSelect( movie: Movie ) {
    console.log( 'MovieListComponent: You clicked on ' + movie.title );
    this.selectedMovie = movie;
    this.movieSelect.emit( movie );
  }
}
