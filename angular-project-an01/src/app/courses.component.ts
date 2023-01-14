import { Component } from '@angular/core';
import { CourseService } from './course/course.service';

@Component({
  selector: 'courses',
  template: `<h2>{{ title }}</h2>
    <h3 [textContent]="title"></h3>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
    <button class="btn btn-danger" [class.active]="isActive">
      Hello Angular Programmer!
    </button>
    <br />
    <button
      class="btn"
      [style.backgroundColor]="isActive ? 'blue' : 'green'"
      (click)="onSave()"
    >
      Hiii
    </button>
    <br />
    <!--input (keyup.enter)="onKeyUp($event)" /-->
    <!--input #email (keyup.enter)="onKeyUp(email.value)" /-->
    <!--input
        [value]="email"
        (keyup.enter)="email = getValue($event); onKeyUp()"
      /-->
    <!--input
      [(ngModel)]="email"
      (keyup.enter)="onKeyUp()"
      /--> `,
})
export class CoursesComponent {
  title = 'List Of Courses.';
  // courses = new CourseService().getCourses();
  courses;

  email = 'me@example.com';
  imgUrl = '';
  isActive = true;

  onSave() {
    console.log('Button Was Clicked');
  }

  /* onKeyUp($event: any) {
    console.log($event.target.value, $event);
  } */

  /* onKeyUp(email: any) {
    console.log(email);
  } */

  getValue(event: any) {
    return (event.target as HTMLInputElement).value;
  }

  onKeyUp() {
    console.log(this.email);
  }

  constructor(service: CourseService) {
    // let service = new CourseService();
    this.courses = service.getCourses();
  }
}
