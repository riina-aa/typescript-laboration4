import { HttpClient } from '@angular/common/http';
import { Injectable, signal, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export interface Courses {
  code: string, 
  coursename: string, 
  progression: string, 
  syllabus: string
}

@Injectable({
  providedIn: 'root',
})

export class FetchCourses {

  private url = "https://webbutveckling.miun.se/files/ramschema.json"; 

  http = inject(HttpClient); 

  //Hämta kurser 
  async fetchCourses(): Promise<Courses[]> {
    const courses = this.http.get<Courses[]>(this.url); 
    return await firstValueFrom(courses); 
  }
}
