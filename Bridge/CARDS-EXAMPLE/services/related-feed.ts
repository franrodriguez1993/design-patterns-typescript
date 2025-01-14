import { Feed } from "../interface/feed";
import { CardBridge } from "../interface/card.bridge";

export class RelatedFeed extends Feed {
  private relatedTitle: string;
  private relatedThumbnail: string;

  constructor(relatedTitle: string, relatedThumbnail: string, homeCardBridge: CardBridge) {
    super(homeCardBridge)
    this.relatedTitle = relatedTitle;
    this.relatedThumbnail = relatedThumbnail;
  }

  createCard():string {
    return this.homeCardBridge.createCard(this.relatedTitle, this.relatedThumbnail);
  }
}