import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NameComponent } from './components/name.component';

@NgModule({
  declarations: [ NameComponent ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ NameComponent ],
  providers: [    
  ]
})

export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    console.log('Core Module Loaded!');

    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
