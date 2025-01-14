import { CardBridge } from "../interface/card.bridge";

export class ReelCard implements CardBridge{
  createCard(title:string,thumbnail:string): string {
    return `<div><img src=${thumbnail}alt="reel-card-${title}"/> <p>${title}</p> </div>`
  }
  
}