import './style.css';
import { GameboardUI } from "./battleshipUI";
import { Ship } from "./ship";
import { Player } from './player';

class Game {
  placeShipsBoardUI: GameboardUI;
  playerBoardUI: GameboardUI | null = null;
  computerBoardUI: GameboardUI | null = null;
  dialog: HTMLDialogElement;
  players: Player[] = [];
  playerTurn: boolean = true;

  constructor() {
    this.dialog = document.getElementById('ship-placement-dialog') as HTMLDialogElement;
    this.placeShipsBoardUI = new GameboardUI('gameboard-container');
    this.players.push(new Player('real', 10));
    this.init();
  }

  init() {
    this.dialog.showModal();
    this.setupEventListeners();
    this.setupButtons();
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
  }

  setupButtons() {
    this.placeShipsBoardUI.gameboard.addEventListener('dragover', (e: DragEvent) => this.dragOver(e));
    this.placeShipsBoardUI.gameboard.addEventListener('drop', (e: DragEvent) => this.drop(e));

    const confirmButton = document.getElementById("confirm-button");
    if (confirmButton) {
      confirmButton.addEventListener('click', () => this.startGame());   
    }

    const resetButton = document.getElementById("reset-button");
    if (resetButton) {
      resetButton.addEventListener('click', () => this.resetShips());
    }

    const rotateButton = document.getElementById("rotate-button");
    if (rotateButton) {
      rotateButton.addEventListener('click', () => this.rotateShips());
    }

    const startNewGameButton = document.querySelector(".start-new-game") as HTMLButtonElement;
    if (startNewGameButton) {
      startNewGameButton.addEventListener('click', () => this.resetGame());
    }

    const viewCodeButton = document.querySelector(".view-code") as HTMLButtonElement;
    if (viewCodeButton) {
      viewCodeButton.addEventListener('click', () => {
        window.location.href = "https://github.com/Lanut1/odin-battleship";
      });
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
      this.players[0].gameboard.placeShip(ship, x, y);
      this.placeShipsBoardUI.placeShip(x, y, parseInt(shipLength), shipType, isHorizontal);
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

  rotateShips() {
    const ships = document.querySelectorAll('.ships-container .ship');
    const shipsContainer = document.querySelector('.ships-container') as HTMLElement;
    shipsContainer.classList.toggle('vertical');
    ships.forEach(ship => {
      if (ship instanceof HTMLElement) {
        const isHorizontal = ship.dataset.horizontal === 'true';
        ship.dataset.horizontal = (!isHorizontal).toString();

        if (ship.dataset.length !== undefined) {
          const length = parseInt(ship.dataset.length);
          if (ship.dataset.horizontal === "true") {
            ship.style.height = '2.5rem';
            ship.style.width = `${length * 2.5}rem`;
          } else {
            ship.style.height = `${length * 2.5}rem`;
            ship.style.width = '2.5rem';
          }  
        }
      }
    })
  }

  resetShips() {
    this.players[0].gameboard.resetBoard();
    this.placeShipsBoardUI.resetBoard();
    const shipsContainer = document.querySelector('.ships-container') as HTMLElement;
    shipsContainer.replaceChildren();
    const shipData = [
      { type: 'carrier', length: 5 },
      { type: 'battleship', length: 4 },
      { type: 'cruiser', length: 3 },
      { type: 'submarine', length: 3 },
      { type: 'destroyer', length: 2 }
    ];

    shipData.forEach(ship => {
      const shipElement = document.createElement('div');
      shipElement.className = `ship ${ship.type}-container`;
      shipElement.draggable = true;
      shipElement.dataset.ship = ship.type;
      shipElement.dataset.length = ship.length.toString();
      shipElement.dataset.horizontal = 'true';

      shipElement.style.width = `${ship.length * 2.5}rem`;
      shipElement.style.height = '2.5rem';
      shipsContainer.appendChild(shipElement);
      if (shipsContainer.classList.contains('vertical')) {
        shipsContainer.classList.toggle('vertical');
      }
    })

    this.setupEventListeners();
  }

  resetGame() {
    this.resetShips();
    this.players[1].attackCells.clear();
    this.playerTurn = true;
    this.computerBoardUI?.resetBoard();
    this.players[1].gameboard.resetBoard();
    this.playerBoardUI?.resetBoard();
    const resultsDialog = document.querySelector("#result-dialog") as HTMLDialogElement;
    resultsDialog.classList.remove("show-animation");
    resultsDialog.classList.add("hide-animation");
    setTimeout(() => {
      resultsDialog.close();
    }, 700);

    this.dialog.classList.remove("hide-animation");
    this.dialog.classList.add("show-animation");
    this.dialog.showModal();
  }

  startGame() {
    this.dialog.classList.add("hide-animation");
    setTimeout(() => {
      this.dialog.close();
      this.dialog.classList.remove("hide-animation");
    }, 800);
    this.makeRealPlayer();
    this.makeComputerPLayer();
    this.setupAttackEventListeners();
  }

  showMessage(message: string | Error) {
    const container = document.querySelector('.message-container') as HTMLElement;
    if (message instanceof Error) {
      container.innerText = message.message;
    } else {
      container.innerText = message;
    }

    setTimeout(() => {
      container.innerText = "";
    }, 1500);
  }

  showResults(message: string) {
    const resultsDialog = document.querySelector('#result-dialog') as HTMLDialogElement;
    const messageContainer = document.querySelector('.result-message') as HTMLElement;
    messageContainer.innerText = message;
    resultsDialog.classList.remove('hide-animation');
    resultsDialog.classList.add('show-animation');
    resultsDialog.showModal();
  }

  makeRealPlayer() {
    const realPlayer = this.players[0];
    if (this.playerBoardUI === null) {
      const playerUIBoard = new GameboardUI("player-gameboard-container");
      this.playerBoardUI = playerUIBoard;
    }

    realPlayer.gameboard.totalShips.forEach(ship => {
      if (ship.startX !== null && ship.startY !== null) {
        this.playerBoardUI?.placeShip(ship.startX, ship.startY, ship.length, ship.type, ship.isHorizontal);
      }
    })
  }

  makeComputerPLayer() {
    if (!this.players[1]) {
      const computerPlayer = new Player("computer", 10);
      this.players.push(computerPlayer);
      const computerUIBoard = new GameboardUI("computer-gameboard-container");
      this.computerBoardUI = computerUIBoard;
    }

    const ships = [
      { type: 'carrier', length: 5 },
      { type: 'battleship', length: 4 },
      { type: 'cruiser', length: 3 },
      { type: 'submarine', length: 3 },
      { type: 'destroyer', length: 2 }
    ];

    ships.forEach(ship => {
      let placed = false;
      while (!placed) {
        const x = Math.floor(Math.random() * 10);
        const y = Math.floor(Math.random() * 10);
        const isHorizontal = Math.random() < 0.5;

        try {
          const newShip = new Ship(ship.length, ship.type, isHorizontal);
          this.players[1].gameboard.placeShip(newShip, x, y);
          placed = true;
        } catch (error) {
          // If placement fails, the loop will try again with new random coordinates
        }
      }
    })
  }

  setupAttackEventListeners() {
    const computerGameboardContainer = document.getElementById("computer-gameboard-container");
    if (!computerGameboardContainer?.dataset.listenerAttached) {
      computerGameboardContainer?.addEventListener('click', (event) => this.handleAttack(event));
      computerGameboardContainer?.setAttribute('data-listener-attached', 'true');
    }
  };

  handleAttack(event: MouseEvent): void {
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
              this.handleSunkShip(x, y, false);
            }

            if (attackResult.allSunk === true) {
              this.showResults("You won!");
              return;
            }
          } else {
            target.classList.add('miss');
          }

          this.playerTurn = false;
          this.playComputerRound();
        } catch (error) {
          if (error instanceof Error) {
            this.showMessage(error);
          } else {
            this.showMessage(String(error));
          }
        }
      }
    }
  }

  handleSunkShip(x: number, y: number, isPlayerShip: boolean): void {
    const playerIndex = isPlayerShip ? 0 : 1;
    const opponentIndex = isPlayerShip ? 1 : 0;
    const boardContainerId = isPlayerShip ? "player-gameboard-container" : "computer-gameboard-container";
    
    this.showMessage(`${isPlayerShip ? "Your" : "Computer's"} ship is sunk!`);
    
    const sunkShip = this.players[playerIndex].gameboard.board[x][y].hasShip as Ship;
    const cellsAround = this.players[playerIndex].gameboard.cellsAroundSunkShip(sunkShip);
    
    cellsAround.forEach(cell => {
      if (isPlayerShip) {
        this.players[opponentIndex].attackCells.add(cell);
      }
      
      const [cellX, cellY] = cell.split(',');
      const gameboardContainer = document.querySelector(`#${boardContainerId}`) as HTMLElement;
      const UICell = gameboardContainer.querySelector(`[data-x="${cellX}"][data-y="${cellY}"]`) as HTMLElement;
      
      if (!UICell.classList.contains('miss')) {
        UICell.classList.add('miss');
      }
    });
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
    } while (this.players[1].attackCells.has(cellKey));
    
    try {
      const computerAttackResult = this.players[0].gameboard.receiveAttack(x, y);
      const cell = this.playerBoardUI?.gameboard.querySelector(`[data-x="${x}"][data-y="${y}"]`) as HTMLElement;

      if (computerAttackResult.hit === true) {
        cell.classList.add('hit-ship');
        if (computerAttackResult.sunk === true) {
          this.handleSunkShip(x, y, true);
        }

        if (computerAttackResult.allSunk === true) {
          this.showResults("Computer won!");
          return;
        }
      } else {
        cell.classList.add('miss');
      }

      this.players[1].attackCells.add(cellKey);
      this.playerTurn = true;
    } catch (error) {
      if (error instanceof Error) {
        this.showMessage(error);
      } else {
        this.showMessage(String(error));
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new Game();
});