import { EnemyType } from "../interface/enemy-type.interface";

// Factory: Crea y gestiona los EnemyType (Flyweights)
export class EnemyTypeFactory {
  private types: Map<string, EnemyType> = new Map();

  getEnemyType(texture: string, sound: string, behavior: string): EnemyType {
    const key = `${texture}-${sound}-${behavior}`;
    if (!this.types.has(key)) {
      this.types.set(key, new EnemyType(texture, sound, behavior));
    }
    return this.types.get(key)!;
  }
}