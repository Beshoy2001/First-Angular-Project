import { Component } from '@angular/core';
import { Card } from '../models/Card';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrl: './hero-list.component.css'
})
export class HeroListComponent {
 
  constructor(public heroservice:HeroService){

  }
  currentCard: Card = { id: 0, name: '', power: 0, img: '' }
  IsUpdate = false;
  removeItem(id: number) {
    // this.cards.splice(id-1,1);
    // console.log(this.cards);

    this.heroservice.cards = this.heroservice.cards.filter(card => card.id !== id)

    console.log(this.heroservice.cards);
  }

  updateItem(card: Card) {
    this.IsUpdate = true;
    this.currentCard = { ...card };
  }
}
