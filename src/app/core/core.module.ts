import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoreService } from './services/core.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    CoreService
  ],
  exports: []
})

export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    console.log('Core Module Loaded!');

    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
