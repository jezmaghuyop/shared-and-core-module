import { Component } from '@angular/core';
import { CoreService } from './core/services/core.service';
import { SharedService } from './shared/services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string;
  name: string;

  constructor(
    public coreService: CoreService,
    public sharedService: SharedService
  ) {

  }

  public updateUsername() {
    this.coreService.username = this.username;
  }

  public updateName() {
    this.sharedService.name = this.name;
  }
}
