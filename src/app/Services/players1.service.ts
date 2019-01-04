import { Injectable } from '@angular/core';
import { Players1 } from '../Models/Players1';

@Injectable({
  providedIn: 'root'
})
export class Players1Service {
player1list=[new Players1('Sachin',40,'Batsman')];
  constructor() { }
}
