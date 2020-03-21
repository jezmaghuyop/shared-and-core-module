import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-user',
  template: 'Hi {{user}}'
})
export class UserComponent implements OnInit {
  @Input() user: string;

  constructor() { }

  ngOnInit() {
    console.log(this.user);
  }
}
