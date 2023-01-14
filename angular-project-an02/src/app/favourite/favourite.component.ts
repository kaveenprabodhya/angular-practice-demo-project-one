import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
  /* inputs: ['isFavourite'], */
})
export class FavouriteComponent implements OnInit {
  @Input('is-favourite') isSelected = false;

  @Output('change') click = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.isSelected = !this.isSelected;
    this.click.emit({ newValue: this.isSelected });
  }
}

export interface FavouriteChangeEventArgs {
  newValue: boolean;
}
