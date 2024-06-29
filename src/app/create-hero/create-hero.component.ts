import { Component } from '@angular/core';
import { Card } from '../models/Card';
import { HeroService } from '../services/hero.service';
 
@Component({
  selector: 'app-create-hero',
  templateUrl: './create-hero.component.html',
  styleUrl: './create-hero.component.css'
})
export class CreateHeroComponent {
  constructor(private heroservice:HeroService){

  }
  currentCard:Card={id:0,name:'',power:0,img:''}
  IsUpdate = false; 

    createCard() {
      if (this.IsUpdate == false) {
        var newCard:Card={
          id: this.heroservice.cards.length + 1,
          name: this.currentCard.name,
          power: this.currentCard.power,
          img: this.currentCard.img
        }
        this.heroservice.cards.push(newCard);
        
      } else {
       var index=this.heroservice.cards.findIndex(card =>card.id==this.currentCard.id);
       this.heroservice.cards[index]={...this.currentCard};
       this.IsUpdate=false;
      }
      this.resetForm();
    }

    
resetForm(){
  this.currentCard ={id:0,name:'',power:0,img:''};
}
}
