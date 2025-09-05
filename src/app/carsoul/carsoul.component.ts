import { Component, Input } from '@angular/core';
import { Items } from '../model/item.model';

@Component({
  selector: 'app-carsoul',
  templateUrl: './carsoul.component.html',
  styleUrls: ['./carsoul.component.scss']
})
export class CarsoulComponent {
  @Input() suggestions:Items[]=[];
  
index=0;
next():void{
  if(this.index<this.suggestions.length-1)
  this.index=++this.index;
  else this.index=0;
}
previous():void{
  if(this.index>0)
  this.index=--this.index;
  else this.index=this.suggestions.length-1
}
}
