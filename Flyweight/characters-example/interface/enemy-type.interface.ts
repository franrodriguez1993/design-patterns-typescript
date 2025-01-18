export class EnemyType {
  constructor(
    public texture: string,
    public sound: string,
    public behavior: string // Patrullaje, ataque, etc.
  ) {}

  render(x: number, y: number, health: number, strength: number): void {
    console.log(
      `Rendering ${this.texture} at (${x}, ${y}) with ${health} HP and ${strength} STR.`
    );
  }
}