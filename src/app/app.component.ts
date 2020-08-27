import { Component } from '@angular/core';

export interface Card {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  toggle = true;

  cards: Card[] = [
    {
      title: 'The first card',
      text: 'This is text of the first card',
    },
    {
      title: 'Card 2',
      text: 'This is card number 2',
    },
    {
      title: 'The last card',
      text: 'This is text of the last card',
    },
  ];

  toggleCards() {
    this.toggle = !this.toggle;
  }
}
