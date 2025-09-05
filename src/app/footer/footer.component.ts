import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <p>
      Copyrights @2022. &copy; All rights reserved.
    </p>
  `,
  styles: [
    `
    p{
      margin-left:450px;
      bottom: 0;
      
    }`
  ]
})
export class FooterComponent {

}
