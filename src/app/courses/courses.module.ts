import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms'
import { RouterModule } from '@angular/router';
import { CoursesService } from 'src/services/courses.service';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './component/courses/courses.component';
import { CourseEditComponent } from './component/course-edit/course-edit.component';
import { CourseAddComponent } from './component/course-add/course-add.component';



@NgModule({
  declarations: [CoursesComponent, CourseEditComponent, CourseAddComponent],
  imports: [
    CommonModule,
    RouterModule,
    CoursesRoutingModule,
    ReactiveFormsModule
  ],
  exports:[CoursesComponent,CourseEditComponent,CourseAddComponent],
  providers: [CoursesService],

})
export class CoursesModule { }
