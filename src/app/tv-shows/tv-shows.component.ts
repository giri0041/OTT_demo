import { Component } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss']
})
export class TvShowsComponent {
  showList:any=[]
constructor(private httpservice:HttpService){}
ngOnInit(){
  this.httpservice.getshows().subscribe((data:any)=>this.showList=data.tv_shows)
}
}
