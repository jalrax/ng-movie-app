import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  movie: any;
  arr = [];

  addToFavourite(movie: any) {
    this.arr.push(movie);
    console.log(this.arr);
  }
}
