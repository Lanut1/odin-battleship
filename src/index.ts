import './style.css';
import { GameboardUI } from "./battleshipUI";
import { Gameboard } from "./gameboard";
import { Ship } from "./ship";
import { Player } from './player';

class Game {
  playerBoardUI: GameboardUI;
  computerBoardUI: GameboardUI | null = null;
  computerAttackCells: Set<string> = new Set;
  dialog: HTMLDialogElement;
  players: Player[] = [];
  playerTurn: boolean = true;

  constructor() {
    this.dialog = document.getElementById('ship-placement-dialog') as HTMLDialogElement;
    this.playerBoardUI = new GameboardUI('gameboard-container');
    this.players.push(new Player('real', 10));
    this.init();
  }

  init() {
    this.dialog.showModal();
    this.setupEventListeners();
  }

  setupEventListeners() {
    const ships = document.querySelectorAll('.ship');
    ships.forEach(ship => {
      ship.addEventListener('dblclick', (e: Event) => {
        if (e instanceof MouseEvent) {
          this.rotateShip(e);
        }
      })
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
    e.dataTransfer?.setData('text/plain', `${target.dataset.ship},${target.dataset.length},${target.dataset.horizontal}`);
  }

  dragOver(e: DragEvent) {
    e.preventDefault();
  }

  drop(e: DragEvent) {
    e.preventDefault();
    const target = e.target as HTMLElement;
    if (!target.classList.contains('cell')) return;

    const data = e.dataTransfer?.getData('text/plain');
    if (!data) return;
    const [shipType, shipLength, shipPosition] = data.split(',');
    const x = parseInt(target.dataset.x || '0');
    const y = parseInt(target.dataset.y || '0');
    const isHorizontal = shipPosition === 'true';

    try {
      const ship = new Ship(parseInt(shipLength), shipType, isHorizontal);
      console.log(shipPosition);
      console.log(ship);
      this.players[0].gameboard.placeShip(ship, x, y);
      this.playerBoardUI.placeShip(x, y, parseInt(shipLength), shipType, isHorizontal);
      if (this.players[0].gameboard.totalShips.length === 5) {
        const confirmButton = document.getElementById("confirm-button") as HTMLButtonElement | null;
        if (confirmButton) {
          confirmButton.disabled = false;
        }
      }
    } catch (error) {
      console.error("Invalid ship placement:", error);
    }
  }

  rotateShip(e: MouseEvent) {
    const target = e.target as HTMLElement;
    target.classList.toggle('vertical');
    const isHorizontal = target.dataset.horizontal === 'true';
    target.dataset.horizontal = (!isHorizontal).toString();

    if (target.dataset.length !== undefined) {
      const length = parseInt(target.dataset.length);
      if (target.dataset.horizontal === "true") {
        target.style.height = '2.5rem';
        target.style.width = `${length * 2.5}rem`;
      } else {
        target.style.height = `${length * 2.5}rem`;
        target.style.width = '2.5rem';
      }  
    }
  }

  startGame() {
    this.dialog.close();
    this.makeRealPlayer();

    this.makeComputerPLayer();
    this.setupAttackEventListeners();
  }

  makeRealPlayer() {
    const realPlayer = this.players[0];
    const playerUIBoard = new GameboardUI("player-gameboard-container");
    this.playerBoardUI = playerUIBoard;
    console.log(realPlayer.gameboard.totalShips);
    realPlayer.gameboard.totalShips.forEach(ship => {
      console.log(ship);
      if (ship.startX !== null && ship.startY !== null) {
        console.log(ship.startX)
        console.log(ship.startY)
        playerUIBoard.placeShip(ship.startX, ship.startY, ship.length, ship.type, ship.isHorizontal);
      }
    })
  }

  makeComputerPLayer() {
    const computerPlayer = new Player("computer", 10);
    this.players.push(computerPlayer);
    const computerUIBoard = new GameboardUI("computer-gameboard-container");
    this.computerBoardUI = computerUIBoard;

    const carrier = new Ship(5, 'carrier', false);
    computerPlayer.gameboard.placeShip(carrier, 0, 0);
    const battleship = new Ship(4, 'battleship', true);
    computerPlayer.gameboard.placeShip(battleship, 0, 2);
    const cruiser = new Ship(3, 'cruiser', true);
    computerPlayer.gameboard.placeShip(cruiser, 6, 1);
    const submarine = new Ship(3, 'submarine', false);
    computerPlayer.gameboard.placeShip(submarine, 1, 8);
    const destroyer = new Ship(2, 'destroyer', true);
    computerPlayer.gameboard.placeShip(destroyer, 9, 7);
  }

  setupAttackEventListeners() {
    const computerGameboardContainer = document.getElementById("computer-gameboard-container");
    computerGameboardContainer?.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (target.classList.contains("cell") && this.playerTurn === true) {
        if (target.dataset.x && target.dataset.y) {
          const x = parseInt(target.dataset.x);
          const y = parseInt(target.dataset.y);

          try {
            const attackResult = this.players[1].gameboard.receiveAttack(x, y);
            if (attackResult.hit === true) {
              target.classList.add('hit-ship');
              if (attackResult.sunk === true) {
                console.log("This ship is sunk!");
              }

              if (attackResult.allSunk === true) {
                alert("You won!");
              }
            } else {
              target.classList.add('miss');
            }

            this.playerTurn = false;
            console.log(this.playerTurn);
            this.playComputerRound();
          } catch (error) {
            console.error(error);
          }
        }
      }
    })
  }

  playComputerRound() {
    const boardSize = this.players[0].gameboard.size;
    let cellKey: string;
    let x: number;
    let y: number;

    do {
      x = Math.floor(Math.random() * boardSize);
      y = Math.floor(Math.random() * boardSize);
      cellKey = `${x},${y}`;
    } while (this.computerAttackCells.has(cellKey));

    this.computerAttackCells.add(cellKey);
    
    try {
      const computerAttackResult = this.players[0].gameboard.receiveAttack(x, y);
      console.log(computerAttackResult);
      const cell = this.playerBoardUI.gameboard.querySelector(`[data-x="${x}"][data-y="${y}"]`) as HTMLElement;

      if (computerAttackResult.hit === true) {
        cell.classList.add('hit-ship');
        if (computerAttackResult.sunk === true) {
          console.log("This ship is sunk!");
        }

        if (computerAttackResult.allSunk === true) {
          alert("Computer won!");
        }
      } else {
        cell.classList.add('miss');
      }

      this.playerTurn = true;
    } catch (error) {
      console.error(error);
    }

  }
}

document.addEventListener('DOMContentLoaded', () => {
  new Game();
});