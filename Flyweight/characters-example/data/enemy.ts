import { EnemyType } from "../interface/enemy-type.interface";

export class Enemy {
  constructor(
    public x: number, //extrínsico
    public y: number, //extrínsico
    public health: number, //extrínsico
    public strength: number, //extrínsico 
    private type: EnemyType  //intrínseco (del flyweight)
  ) {}

  render(): void {
    this.type.render(this.x, this.y, this.health, this.strength);
  }
}