import './style.css';
import { GameboardUI } from "./battleshipUI";
import { Gameboard } from "./gameboard";
import { Ship } from "./ship";

class Game {
  playerBoardUI: GameboardUI;
  playerGameboard: Gameboard;
  dialog: HTMLDialogElement;

  constructor() {
    this.dialog = document.getElementById('ship-placement-dialog') as HTMLDialogElement;
    this.playerBoardUI = new GameboardUI('gameboard-container');
    this.playerGameboard = new Gameboard(10);
    this.init();
  }

  init() {
    this.dialog.showModal();
    this.setupEventListeners();
  }

  setupEventListeners() {
    const ships = document.querySelectorAll('.ship');
    ships.forEach(ship => {
      ship.addEventListener('dragstart', (e: Event) => {
        if (e instanceof DragEvent) {
          this.dragStart(e);
        }
      });
    });

    this.playerBoardUI.gameboard.addEventListener('dragover', (e: DragEvent) => this.dragOver(e));
    this.playerBoardUI.gameboard.addEventListener('drop', (e: DragEvent) => this.drop(e));


    const confirmButton = document.getElementById("confirm-button");
    if (confirmButton) {
      confirmButton.addEventListener('click', () => this.startGame());   
    }
  }

  dragStart(e: DragEvent) {
    const target = e.target as HTMLElement;
    console.log("Drag Start!");
    console.log("Ship data:", target.dataset.ship, target.dataset.length);
    e.dataTransfer?.setData('text/plain', `${target.dataset.ship},${target.dataset.length}`);
  }

  dragOver(e: DragEvent) {
    e.preventDefault();
  }

  drop(e: DragEvent) {
    e.preventDefault();
    const target = e.target as HTMLElement;
    if (!target.classList.contains('cell')) return;

    const data = e.dataTransfer?.getData('text/plain');
    if (!data) {
      console.log("There is no data!");
      return;
    }

    const [shipType, shipLength] = data.split(',');
    const x = parseInt(target.dataset.x || '0');
    const y = parseInt(target.dataset.y || '0');
    console.log(`X: ${x}`);
    console.log(`Y: ${y}`);

    try {
      const ship = new Ship(parseInt(shipLength));
      this.playerGameboard.placeShip(ship, x, y);
      this.playerBoardUI.placeShip(x, y, parseInt(shipLength), shipType, true);
      if (this.playerGameboard.totalShips.length === 5) {
        const confirmButton = document.getElementById("confirm-button") as HTMLButtonElement | null;
        if (confirmButton) {
          confirmButton.disabled = false;
        }
      } // Assuming horizontal placement
    } catch (error) {
      console.error("Invalid ship placement:", error);
    }
  }

  startGame() {
    this.dialog.close();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new Game();
});