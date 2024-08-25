import { Gameboard } from "./gameboard";
import { GameboardUI } from "./battleshipUI";

interface IPlayer {
  type: string;
  gameboard: Gameboard;
}

export class Player implements IPlayer {
  type: string;
  gameboard: Gameboard;

  constructor(type: string = 'real', boardOrSize: Gameboard | number) {
    this.type = type;
    if (boardOrSize instanceof Gameboard) {
      this.gameboard = boardOrSize;
    } else {
      this.gameboard = new Gameboard(boardOrSize);
    }
    
  }
}