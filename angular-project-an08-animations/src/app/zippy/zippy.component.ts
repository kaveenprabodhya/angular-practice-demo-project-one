import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { collapsed } from './zippy-animation';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
  animations: [
    /* trigger('expandCollapse', [
      state(
        'collapsed',
        style({
          height: 0,
          paddingTop: 0,
          paddingBottom: 0,
          overflow: 'hidden',
        })
      ),
      /* state('expanded', style({ height: '*', padding: '*', overflow: 'auto' })), */
    /*  transition('collapsed => expanded', [animate('300ms ease-out')]),
      transition('expanded => collapsed', [animate('300ms ease-in')]),
    ]), */
    collapsed,
  ],
})
export class ZippyComponent {
  @Input('title') heading: string | undefined;
  isExpanded: boolean = false;

  constructor() {}

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
