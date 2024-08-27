export class GameboardUI {
  size: number;
  gameboard: HTMLElement;

  constructor(containerId: string, size: number = 10) {
    this.gameboard = document.getElementById(containerId) as HTMLElement;
    this.size = size;
    this.makeBoard();
  }

  makeBoard() {
    this.gameboard.replaceChildren;
    this.gameboard.style.display = 'grid';
    this.gameboard.style.gridTemplateColumns = `repeat(${this.size}, 1fr)`;

    for (let x = 0; x < this.size; x++) {
      for (let y = 0; y < this.size; y++) {
        const cellElement = document.createElement('div');
        cellElement.className = 'cell';
        cellElement.dataset.x = x.toString();
        cellElement.dataset.y = y.toString();
        this.gameboard.appendChild(cellElement);
      }
    }
  }

  placeShip(x: number, y: number, length: number, type: string, isHorizontal: boolean) {
    for (let i = 0; i < length; i++) {
      let newX = isHorizontal ? x : x + i;
      let newY = isHorizontal ? y + i : y;
      const cell = this.gameboard.querySelector(`[data-x="${newX}"][data-y="${newY}"]`) as HTMLElement;
      if (cell) {
        cell.classList.add('ship', type);
      }
    }

    const shipElement = document.querySelector(`.ship[data-ship="${type}"]`);
    if (shipElement && shipElement.parentElement) {
      shipElement.parentElement.removeChild(shipElement);
    }
  }

  resetBoard() {
    const cells = this.gameboard.querySelectorAll('.cell');
    cells.forEach((cell) => {
      cell.className = 'cell';
    });
  }
}