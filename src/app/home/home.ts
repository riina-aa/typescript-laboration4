import { Component, signal, inject, computed, isWritableSignal } from '@angular/core';
import { Courses, FetchCourses } from '../services/fetch-courses';
import { UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [UpperCasePipe, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  courses = signal<Courses[]>([]);
  error = signal<string | null>(null);
  sortTable = signal<"code" | "coursename" | "progression">("code");
  searchTerm = signal("");

  fetchCourses = inject(FetchCourses);

  displayedCourses = computed(() => {
    const column = this.sortTable();
    const search = this.searchTerm().toLowerCase();

    const filtered = this.courses().filter(course =>
      course.coursename.toLowerCase().includes(search) ||
        course.code.toLowerCase().includes(search)
    ); 

    return filtered.sort((a, b) =>
      a[column].localeCompare(b[column])
    ); 
  });

ngOnInit() {
  this.loadCourses();
}

  async loadCourses() {
  try {

    const response = await this.fetchCourses.fetchCourses();
    this.courses.set(response);

  } catch (error) {
    this.error.set("Något gick fel: " + error);
  }
};

sortCourses(column: "code" | "coursename" | "progression") {
  this.sortTable.set(column);
}; 

  



}
