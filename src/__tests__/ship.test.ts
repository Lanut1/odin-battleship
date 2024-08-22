import { Ship } from "../ship";

describe('Ship', () => {
  test('should initialize with correct length and default values', () => {
    const ship = new Ship(3);
    expect(ship.length).toBe(3);
    expect(ship.isHorizontal).toBe(true);
    expect(ship.hits).toBe(0);
    expect(ship.sunk).toBe(false);
  });

  test('should increase hits when hit() is called', () => {
    const ship = new Ship(3);
    ship.hit();
    expect(ship.hits).toBe(1);
  });

  test('should sink the ship when hits reach the length', () => {
    const ship = new Ship(3);
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
    expect(ship.sunk).toBe(true);
  });

  test('should not sink the ship if hits are less than length', () => {
    const ship = new Ship(3);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(false);
    expect(ship.sunk).toBe(false);
  });
});