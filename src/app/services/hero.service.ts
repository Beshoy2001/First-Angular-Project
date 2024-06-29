import { Injectable } from '@angular/core';
import { Card } from '../models/Card';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  cards: Card[] = [];
  constructor() { }
}
