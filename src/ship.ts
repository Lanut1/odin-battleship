interface IShip {
  length: number;
  isHorizontal: boolean;
  hits: number;
  sunk: boolean;
  hit(): void;
  isSunk(): boolean;
}

export class Ship implements IShip {
  length: number;
  isHorizontal: boolean;
  hits: number = 0;
  sunk: boolean = false;
  
  constructor(length: number, position: boolean = true) {
    this.length = length;
    this.isHorizontal = position;
  }

  hit(): void {
    this.hits += 1;
  }

  isSunk(): boolean {
    if (this.hits >= this.length) {
      this.sunk = true;
    }

    return this.sunk;
  }
}