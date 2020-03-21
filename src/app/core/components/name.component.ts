import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "core-name",
  template: "My Name {{name}}"
})
export class NameComponent implements OnInit {
  @Input() name: string;

  constructor() {}

  ngOnInit() {
    console.log(this.name);
  }
}
