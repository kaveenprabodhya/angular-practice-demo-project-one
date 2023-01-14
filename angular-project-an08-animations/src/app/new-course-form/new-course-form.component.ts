import {
  animate,
  animateChild,
  group,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { bounceOutleftAnimation, fadeInAnimation } from '../animations';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css'],
  /* animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(1000),
      ]),
      transition('* => void', [
        animate(1000, style({ transform: 'translateX(100%)' })),
      ]),
    ]),
  ], */
  /* animations: [
    trigger('fade', [
      transition('void => *', [
        style({ backgroundColor: 'yellow', opacity: 0 }),
        animate(2000),
      ]),
      transition('* => void', [
        style({ backgroundColor: 'red', opacity: 0 }),
        animate(2000),
      ]),
    ]),
  ], */
  /* animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate(500)]),
    ]),
  ], */
  // animations: [slideInBounceOut],
  /* animations: [
    trigger('todoAnimation', [
      transition(':enter', [style({ opacity: 0 }), animate(2000)]),
      transition(':leave', [
        style({ backgroundColor: 'red' }),
        animate(1000),
        useAnimation(bounceOutleftAnimation),
      ]),
    ]),
  ], */
  // animations: [fade],
  animations: [
    /* trigger('todosAnimation', [
      transition(':enter', [
        query('h1', [style({ transform: 'translateY(-20px)' }), animate(1000)]),
        query('@todoAnimation', animateChild()),
      ]),
    ]), */

    trigger('todosAnimation', [
      transition(':enter', [
        group([
          query('h1', [
            style({ transform: 'translateY(-20px)' }),
            animate(1000),
          ]),
          query('@todoAnimation', stagger(200, animateChild())),
          /* query(
            '.list-group-item',
            stagger(200, [
              style({ opacity: 0, transform: 'translateX(-40px)' }),
              animate(1000),
            ])
          ), */
        ]),
      ]),
    ]),

    trigger('todoAnimation', [
      transition(':enter', [
        useAnimation(fadeInAnimation, {
          params: {
            duration: '750ms',
          },
        }),
      ]),
      transition(':leave', [
        style({ backgroundColor: 'red' }),
        animate(1000),
        useAnimation(bounceOutleftAnimation),
      ]),
    ]),
  ],
})
export class NewCourseFormComponent implements OnInit {
  form;
  items: string[] = [];

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      items: [''],
    });
  }

  ngOnInit(): void {
    this.items.push('01', '02', '03', '04');
  }

  addItem(item: HTMLInputElement) {
    this.items.splice(0, 0, item.value);
    item.value = '';
  }

  removeItem(item: any) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

  get topics() {
    return this.form.controls;
  }

  animationStarted($event: any) {
    // console.log($event);
  }
  animationDone($event: any) {
    // console.log($event);
  }
}
