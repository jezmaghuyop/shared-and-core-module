import { Component } from '@angular/core';
import { CoreService } from 'src/app/core/services/core.service';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-main-course',
  templateUrl: './main-course.html'
})
export class MainCourseComponent {
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
