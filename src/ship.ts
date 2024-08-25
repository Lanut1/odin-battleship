interface IShip {
  startX: number | null;
  startY: number | null;
  length: number;
  isHorizontal: boolean;
  hits: number;
  sunk: boolean;
  hit(): void;
  isSunk(): boolean;
}

export class Ship implements IShip {
  startX: number | null = null;
  startY: number | null = null;
  type: string;
  length: number;
  isHorizontal: boolean;
  hits: number = 0;
  sunk: boolean = false;
  
  constructor(length: number, type: string, position: boolean = true) {
    this.length = length;
    this.type = type;
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