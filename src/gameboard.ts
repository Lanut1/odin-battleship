import { Ship } from "./ship";
import { Cell } from "./cell";

type hitMessage = {
  hit: boolean; 
  sunk: boolean; 
  allSunk: boolean
}

interface IGameboard {
  size: number;
  board: Cell[][];
  totalShips: Ship[];
  allSunk: boolean;
  placeShip(ship: Ship, x: number, y: number): void;
  receiveAttack(x: number, y: number): hitMessage;
  areAllSunk(): boolean;
}

export class Gameboard implements IGameboard {
  size: number;
  board: Cell[][];
  totalShips: Ship[] = [];
  allSunk: boolean = false;

  constructor(size: number) {
    this.size = size;
    this.board = Array.from({ length: size }, () =>
      Array.from({ length: size }, () => new Cell())
    )
  }
 
  placeShip(ship: Ship, x: number, y: number): void {
    if (x < 0 || x > this.size - 1 || y < 0 || y > this.size - 1) {
      throw new Error("Coordinates are out of bounds");
    }

    const endX = ship.isHorizontal ? x : x + ship.length - 1;
    const endY = ship.isHorizontal ? y + ship.length - 1 : y;
    if (endX >= this.size || endY >= this.size) {
      throw new Error("Ship placement exceeds board boundaries");
    }

    for (let i = -1; i <= ship.length; i++) {
      for (let j = -1; j <= 1; j++) {
        let checkX = ship.isHorizontal ? x + j : x + i;
        let checkY = ship.isHorizontal ? y + i : y + j;

        if (checkX < 0 || checkX >= this.size || checkY < 0 || checkY >= this.size) continue;
        
        if (this.board[checkX][checkY].hasShip) {
          throw new Error("Ship cannot be placed due to proximity to another ship");
        }
      }
    }
    
    for (let i = 0; i < ship.length; i++) {
      const cell = ship.isHorizontal ? this.board[x][y + i] : this.board[x + i][y];
      cell.placeShip(ship);
    }

    this.totalShips.push(ship);
  }

  receiveAttack(x: number, y: number): hitMessage {
    if (x < 0 || x > this.size - 1 || y < 0 || y > this.size - 1) {
      throw new Error("Attack coordinates are out of bounds");
    }

    const cell = this.board[x][y];

    if (cell.isHit) {
      throw new Error("This cell has already been attacked");
    }

    const isShip = cell.hitCell();

    if (isShip !== null) {
      isShip.hit();
      const sunk = isShip.isSunk();
      const allSunk = this.areAllSunk();

      return { 
        hit: true, 
        sunk: sunk, 
        allSunk: allSunk 
      }
    }

    return {
      hit: false, 
      sunk: false, 
      allSunk: false
    }
  }

  areAllSunk(): boolean {
    return this.totalShips.every((ship) => ship.isSunk() === true);
  }
}