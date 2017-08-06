import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {
  courses = [
      {
        title: 'Angular 1',
        price: 100
      },
      {
        title: 'Angular 2',
        price: 200
      }
  ];
  getCourses(){
      return this.courses;
  }
  constructor() { }

}