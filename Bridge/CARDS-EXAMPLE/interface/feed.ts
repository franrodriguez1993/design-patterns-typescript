import { CardBridge } from "./card.bridge";
//Esta es la abstracción y su conexión con el bridge
export abstract class Feed {
  protected homeCardBridge: CardBridge //Este es el bridge
  constructor(homeCardBridge: CardBridge) {
    this.homeCardBridge = homeCardBridge;
  }
  abstract createCard(): string;
}