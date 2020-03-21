import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "shared-user",
  template: 'Hi {{user}}'    
})
export class UserComponent implements OnInit {
  @Input('wwo') wow: string = '';

  user: string = "ss";

  constructor() {}

  ngOnInit() {
    console.log(this.user);
    console.log(this.wow);
  }
}