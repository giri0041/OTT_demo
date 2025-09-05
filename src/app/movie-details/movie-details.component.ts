import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {
movieDetails:any;
fontColor='coral';
theme='dark';
constructor(private route:ActivatedRoute,
  private movieService:MovieService){}

ngOnInit():void{
  this.route.params.subscribe(params=>{
    this.movieDetails=this.movieService.getMovieDetails(params['movieTitle'])
  });
  }
}
