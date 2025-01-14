import { Feed } from "../interface/feed";
import { CardBridge } from "../interface/card.bridge";

export class HomeFeed extends Feed {
  private title: string;
  private thumbnail: string;

  constructor(title: string, thumbnail: string, homeCardBridge: CardBridge) {
    super(homeCardBridge)
    this.title = title;
    this.thumbnail = thumbnail;
  }

  createCard():string {
    return this.homeCardBridge.createCard(this.title, this.thumbnail);
  }
}