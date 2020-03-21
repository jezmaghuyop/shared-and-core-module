import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { MainFriendComponent } from './main-friend.component';

import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  {
    path: "",
    component: MainFriendComponent,
    children: []
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  declarations: [MainFriendComponent],
  exports: []
})
export class FriendModule {}
