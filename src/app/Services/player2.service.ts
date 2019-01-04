import { Injectable } from '@angular/core';
import { Player2 } from '../Models/Player2';

@Injectable({
  providedIn: 'root'
})
export class Player2Service {
  playerlist2=[new Player2('Ponting',36,'Batsman')]
  constructor() { }
}
