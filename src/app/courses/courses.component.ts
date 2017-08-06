import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { getTestBed } from '@angular/core/testing';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  title = 'List Of Customers';
  email = 'me@emaple.com';
  courses = [];
  getTitle() {
    return this.title;
  }

  OnSave($event) {
    $event.stopPropagation();
    console.log('Button is clicked');
  }

  onKeyUp(email) {
    console.log('Enter is pressed', this.email);
  }

  constructor(service: CoursesService) {
      this.courses = service.getCourses();
   }

  ngOnInit() {
  }

}
