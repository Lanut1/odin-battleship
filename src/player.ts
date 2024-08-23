import { Gameboard } from "./gameboard";

interface IPlayer {
  type: string;
  gameboard: Gameboard;
}

export class Player implements IPlayer {
  type: string;
  gameboard: Gameboard;

  constructor(type: string = 'real', boardSize: number = 10) {
    this.type = type;
    this.gameboard = new Gameboard(boardSize);
  }
}