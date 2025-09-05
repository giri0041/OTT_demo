import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  getshows(){
    return this.http.get('https://www.episodate.com/api/most-popular?page=1')
  }
}
