// Este es el bridge (puente) entre la abstracción y la implementación
export interface CardBridge {
  createCard(title:string,thumbnail:string): string;
}