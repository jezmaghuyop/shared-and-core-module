import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule
  ],
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
