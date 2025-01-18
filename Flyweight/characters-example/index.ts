import { Enemy } from "./data/enemy";
import { EnemyTypeFactory } from "./factory/enemy.factory";

// Uso práctico
const factory = new EnemyTypeFactory();

// Crear varios enemigos
const enemies = [
  new Enemy(10, 20, 100, 15, factory.getEnemyType("zombie.png", "growl.mp3", "aggressive")),
  new Enemy(15, 25, 120, 18, factory.getEnemyType("zombie.png", "growl.mp3", "aggressive")),
  new Enemy(30, 40, 80, 12, factory.getEnemyType("skeleton.png", "clank.mp3", "defensive")),
];

// Renderizar enemigos
enemies.forEach((enemy) => enemy.render());