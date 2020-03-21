import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserComponent } from "./components/user.component";

@NgModule({
  imports: [CommonModule],
  declarations: [UserComponent],
  exports: [UserComponent]
})
export class SharedModule {
  // constructor(@Optional() @SkipSelf() parentModule: SharedModule) {
  //   console.log("Shared Module Module Loaded!");
  // }
}
