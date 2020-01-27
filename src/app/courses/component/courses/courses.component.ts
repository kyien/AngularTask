import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

      courses=[]

  constructor(private course_service: CoursesService) {  }

  ngOnInit() {
this.course_service.fetchCourses().subscribe(data =>{

        this.courses=data
    })
  }

}
