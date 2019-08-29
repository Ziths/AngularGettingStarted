import { Component } from '@angular/core';

@Component({
  selector: 'mss-root',
  template: `
    <div>
      <h1>{{pageTitle}}</h1>
      <div>My First Component</div>
    </div>`,
})
export class AppComponent {
  pageTitle: string = 'Macanta Software Solutions';
}
