import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // courses = [1, 2, 3];
  viewMode = 'map';
  courses = [
    {
      id: 123,
      name: 'course1',
    },
    {
      id: 234,
      name: 'course2',
    },
    {
      id: 345,
      name: 'course3',
    },
  ];

  onAdd() {
    this.courses.push({ id: 456, name: 'course4' });
  }

  onRemove(course: any) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  onChange(course: any) {
    course.name = 'Updated.';
  }

  canSave = true;

  task = {
    title: 'review application',
    assignee: {
      name: 'John Smith',
    },
  };

  title = 'None';
}
