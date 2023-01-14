import { Component } from '@angular/core';
import { FavouriteChangeEventArgs } from './favourite/favourite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  post = {
    title: '',
    isFavourite: true,
  };

  onFavouriteChange(eventArgs: FavouriteChangeEventArgs) {
    console.log('Favourite Change: ', eventArgs);
  }
}
