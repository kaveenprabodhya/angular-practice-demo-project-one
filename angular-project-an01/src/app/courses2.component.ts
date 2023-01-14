import { Component } from '@angular/core';

@Component({
  selector: 'courses2',
  template: `{{ courses.title | uppercase }} <br />
    {{ courses.students | number }} <br />
    {{ courses.rating | number: '2.1-1' }} <br />
    {{ courses.price | currency: 'LKR':'symbol-narrow':'1.2-2' }} <br />
    {{ courses.releaseDate | date: 'mediumDate' }} <br />
    {{ test | summery: 100 }}`,
})
export class Courses2Component {
  courses = {
    title: 'The complete angular course',
    rating: '4.9758',
    students: 46008,
    price: 190.58,
    releaseDate: new Date(2016, 3, 1),
  };

  test =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
}
