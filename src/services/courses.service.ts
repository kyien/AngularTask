import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Icourse } from 'src/models/courses';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private url: string="/assets/data/courses.json";

  constructor(private http: HttpClient) { }

  fetchCourses():Observable <Icourse []>{

  return   this.http.get<Icourse[]>(this.url)

  }
}
