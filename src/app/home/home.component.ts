import { Component } from '@angular/core';
import { Items } from '../model/item.model';

@Component({
  selector: 'app-home',
  template: `
    <p>
    <app-carsoul *ngIf="islogged;else elseblock" [suggestions]="items"></app-carsoul>
    <ng-template #elseblock><h2>Discount opened</h2><p>Discount of 1% in annual subscription</p></ng-template>
    <app-trending-movie></app-trending-movie>
    <app-subscription-details></app-subscription-details>
    </p>
  `,
  styles: [
  ]
})
export class HomeComponent {
  islogged=true;
  items:Items[]=[
    {
      title:'House Of The Dragons',
      description:'The tagareyans are back with more dragons',
      Image:'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/370/1420370-h-cb1860fdfc2c'
  
    },
    {title:'Game Of Thrones',
    description:'Nine noble families wage war against each other in order to gain control over the mythical land of Westeros. Meanwhile, a force is rising after millenniums and threatens the existence of living men.',
    Image:'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3128/1423128-h-25d4cf676768'
    },
    {
      title:'Spider Man',
      description:'With more power comes more responsbilities',
      Image:'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4380/1424380-h-24391dbfc49d'
    }
  
    ]
}
