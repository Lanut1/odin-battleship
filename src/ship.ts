interface IShip {
  length: number;
  hits: number;
  sunk: boolean;
  hit(): void;
  isSunk(): boolean;
};

export class Ship implements IShip {
  length: number;
  hits: number = 0;
  sunk: boolean = false;
  
  constructor(length: number) {
    this.length = length;
  };

  hit(): void {
    this.hits += 1;
  };

  isSunk(): boolean {
    if (this.hits >= this.length) {
      this.sunk = true;
    }

    return this.sunk;
  };
}