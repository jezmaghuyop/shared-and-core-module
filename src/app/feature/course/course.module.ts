import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { MainCourseComponent } from './main-course.component';

const routes: Routes = [
  {
    path: "",
    component: MainCourseComponent,
    children: []
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [MainCourseComponent],
  exports: []
})
export class CourseModule {}
