import { Component, Input } from '@angular/core';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
 moviesList:any = [];
 constructor(private movieService:MovieService) { }
 ngOnInit(){
  this.moviesList=this.movieService.getMovies();
 }

}
