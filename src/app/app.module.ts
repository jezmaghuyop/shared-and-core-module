import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

const routes: Routes = [
  {
    path: '',
    component: HelloComponent,
    children: []
  },
  {
    path: 'course',
    loadChildren: () =>
      import('./feature/course/course.module').then(m => m.CourseModule)
  },
  {
    path: 'friend',
    loadChildren: () =>
      import('./feature/friend/friend.module').then(m => m.FriendModule)
  }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    CoreModule,
    SharedModule
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
