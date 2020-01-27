import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoursesComponent} from './component/courses/courses.component'
import { CourseEditComponent } from './component/course-edit/course-edit.component';
import { CourseAddComponent } from './component/course-add/course-add.component';


const routes: Routes = [

    {path:'',component:CoursesComponent},
    {path:'edit',component:CourseEditComponent},
    {path:'add',component:CourseAddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
