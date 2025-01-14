import { CardBridge } from "../interface/card.bridge";

export class VideoCard implements CardBridge{
  createCard(title:string,thumbnail:string): string {
    return `<div> <h1>${title}</h1> <img src=${thumbnail}alt="MDN"/> </div>`
  }
  
}