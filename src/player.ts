import { Gameboard } from "./gameboard";

interface IPlayer {
  type: string;
  gameboard: Gameboard;
  attackCells: Set<string>;
}

export class Player implements IPlayer {
  type: string;
  gameboard: Gameboard;
  attackCells: Set<string> = new Set;

  constructor(type: string = 'real', boardOrSize: Gameboard | number) {
    this.type = type;
    if (boardOrSize instanceof Gameboard) {
      this.gameboard = boardOrSize;
    } else {
      this.gameboard = new Gameboard(boardOrSize);
    }
  }
}