import { Ship } from "./ship";

interface ICell {
  hasShip: Ship | null;
  isHit: boolean;
  placeShip(ship: Ship): void;
  hitCell(): Ship | null;
  resetCell(): void;
}

export class Cell implements ICell {
  hasShip: Ship | null;
  isHit: boolean;

  constructor() {
    this.hasShip = null;
    this.isHit = false;
  }

  placeShip(ship: Ship): void {
    this.hasShip = ship;
  }

  hitCell(): Ship | null {
    this.isHit = true;
    return this.hasShip;
  }

  resetCell(): void {
    this.hasShip = null;
    this.isHit = false;
  }
}