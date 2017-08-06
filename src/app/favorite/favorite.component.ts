import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  //inputs: ['isFavourite']
})
export class FavoriteComponent implements OnInit {
  @Input() isFavourite: boolean;
  @Output() change = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onClick() {
    this.isFavourite = !this.isFavourite;
    this.change.emit({
      isFavourite: this.isFavourite,
      title: 'Angular 2.0'
    });
  }
}
