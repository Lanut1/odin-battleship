import { Gameboard } from '../gameboard';
import { Ship } from '../ship';

describe('Gameboard', () => {
  test('initializes correctly', () => {
    const gameboard = new Gameboard(10);
    expect(gameboard.size).toBe(10);
    expect(gameboard.board.length).toBe(10);
    expect(gameboard.board[0].length).toBe(10);
    expect(gameboard.totalShips).toHaveLength(0);
  });

  test('places a ship correctly', () => {
    const gameboard = new Gameboard(10);
    const ship = new Ship(3, true); // Assuming the Ship constructor takes length and isHorizontal

    gameboard.placeShip(ship, 0, 0);

    expect(gameboard.board[0][0].hasShip).toBeInstanceOf(Ship);
    expect(gameboard.board[0][1].hasShip).toBeInstanceOf(Ship);
    expect(gameboard.board[0][2].hasShip).toBeInstanceOf(Ship);
    expect(gameboard.totalShips).toHaveLength(1);
  });

  test('throws error when placing a ship out of bounds', () => {
    const gameboard = new Gameboard(10);
    const ship = new Ship(4, true);

    expect(() => gameboard.placeShip(ship, 9, 9)).toThrow('Ship placement exceeds board boundaries');
  });

  test('handles attacks correctly', () => {
    const gameboard = new Gameboard(10);
    const ship = new Ship(2, true);
    gameboard.placeShip(ship, 0, 0);

    let result = gameboard.receiveAttack(0, 0);
    expect(result.hit).toBe(true);
    expect(result.sunk).toBe(false);
    expect(result.allSunk).toBe(false);

    result = gameboard.receiveAttack(0, 1);
    expect(result.hit).toBe(true);
    expect(result.sunk).toBe(true); // Ship is now sunk
  });

  test('checks if all ships are sunk', () => {
    const gameboard = new Gameboard(10);
    const ship1 = new Ship(2, true);
    const ship2 = new Ship(3, false);

    gameboard.placeShip(ship1, 0, 0);
    gameboard.placeShip(ship2, 2, 1);

    gameboard.receiveAttack(0, 0);
    gameboard.receiveAttack(0, 1);
    gameboard.receiveAttack(2, 1);
    gameboard.receiveAttack(3, 1);
    gameboard.receiveAttack(4, 1);

    expect(gameboard.areAllSunk()).toBe(true);
  });
});