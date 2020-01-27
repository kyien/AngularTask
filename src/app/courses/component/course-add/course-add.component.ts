import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, FormArray} from '@angular/forms'

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {

  courseForm: FormGroup
  storedCourses:any

  constructor(private fb:FormBuilder) { }

  ngOnInit() {

    this.courseForm=this.fb.group({

      mycourses:this.fb.array([])
      

  })

  this.courseForm.valueChanges.subscribe(console.log)

  this.readCourses()
  }

  get courseForms() {
    return this.courseForm.get('mycourses') as FormArray
  }

  addCourse() {

    const courses = this.fb.group({ 
       email:[],
       name:[],
      start_date:[]
    })
    this.courseForms.push(courses);
    //localstorage  stuff here
      
    
    }

    storeCourse(){
      localStorage.setItem('courses',JSON.stringify(this.courseForms))


    }

    readCourses(){
      let courses=JSON.parse(localStorage.getItem('courses'))

        this.storedCourses=courses
    }

    // delete(i){

    // }
}