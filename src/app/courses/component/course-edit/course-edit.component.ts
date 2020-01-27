import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormArray} from '@angular/forms'
@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {

    courseForm:FormGroup

  constructor(private fb:FormBuilder) { }

  ngOnInit() {

    this.courseForm=this.fb.group({

      courses:this.fb.array([])
      
    })
  }

  get FormData() {
    return this.courseForm.get('courses')as FormArray
  }

  addCourse(){

    const course = this.fb.group({ 
      email:[],
      name:[],
      course:[],
     start_date:[]
   })
   this.FormData.push(course);
   //localstorage  stuff here
    
  }

  saveCourse(){
      console.log(this.courseForm.value)
    localStorage.setItem('courses',JSON.stringify(this.courseForm.value))
  }

  remove(i:any){
    this.FormData.removeAt(i)

  }

  }


