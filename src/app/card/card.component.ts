import { Card } from './../app.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  @Input() index: number;

  title = 'My Card Title';
  text = 'My sample text';

  cardDate: Date = new Date();

  number = 1;
  array = [1, 1, 2, 3, 5, 8, 13];
  obj = { name: 'Vlad', age: 20, info: { job: 'Software Engineer' } };

  imgUrl = 'https://angular.io/assets/images/logos/angular/angular.png';

  disabled = false;

  textColor: string;

  getInfo(): string {
    return 'This is my info from getInfo()';
  }

  changeTitle(): void {
    this.card.title = 'Title has been changed';
  }

  inputHandler(value) {
    this.card.text = value;
  }

  changeHandler() {
    console.log(this.text);
  }

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.imgUrl = 'https://vuejs.org/images/logo.png';
      this.disabled = true;
    }, 3000);
  }
}
