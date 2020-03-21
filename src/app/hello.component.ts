import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <div class="jumbotron">
      <h1 class="display-4">Hello, world!</h1>
      <p class="lead">
        This is a demo about Shared Module, Core Module and Feature Module.
      </p>
    </div>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {

}
