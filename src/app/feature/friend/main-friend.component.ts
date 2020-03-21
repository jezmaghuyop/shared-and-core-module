import { Component } from '@angular/core';
import { CoreService } from '../../core/services/core.service';
import { SharedService } from '../../shared/services/shared.service';

@Component({
  selector: 'app-main-friend',
  templateUrl: './main-friend.html'
})
export class MainFriendComponent {
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
