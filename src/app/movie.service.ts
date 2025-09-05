import { Injectable } from '@angular/core';
import movies from '../assets/movie-data.json';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
 movieList=movies;
  constructor() { }
  getMovies(){
    return this.movieList;
  }
  getMovieDetails(movieName:string){
    return this.movieList.find((movie:{title:any;})=>movie.title===movieName)
  }
}
