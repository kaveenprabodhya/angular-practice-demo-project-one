import { NgRedux, select } from '@angular-redux/store';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { COUNT_INCREMENT } from './actions';
import { IAppState } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @select() count: Observable<number> | undefined;

  /* @select(['messaging', 'newMessages']) newMessages: any;
  @select((s: IAppState) => s.messaging?.newMessages) newMessagesCount: any; */

  constructor(private ngRedux: NgRedux<Map<string, any>>) {
    /* ngRedux.subscribe(() => {
      // console.log(ngRedux.getState());
      this.count = ngRedux.getState().count;
    }); */
  }

  incrementCount() {
    // this.count++;
    this.ngRedux.dispatch({ type: COUNT_INCREMENT });
  }
}
