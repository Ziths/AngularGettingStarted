import { Component } from '@angular/core';

@Component({
  selector: 'mss-root',
  template: `
    <div>
      <h1>{{pageTitle}}</h1>
      <mss-products></mss-products>
    </div>`,
})
export class AppComponent {
  pageTitle: string = 'Macanta Software Solutions';
}
