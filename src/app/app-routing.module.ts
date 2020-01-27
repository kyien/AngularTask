import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
// import { CoursesComponent } from './courses/component/courses/courses.component';
// import {CoursesComponent} from './courses/courses.component'

const routes: Routes = [

    {path:'',component:HomeComponent},
    {
      path:'courses',
      loadChildren:'./courses/courses.module#CoursesModule'
    // component:CoursesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
