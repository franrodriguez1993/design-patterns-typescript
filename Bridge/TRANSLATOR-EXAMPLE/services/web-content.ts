import { ContentManager } from "../interface/content-manager";
import { TranslatorBridge } from "../interface/translator";

export class WebContent extends ContentManager {
  private content: string;
  
  constructor(content: string, tranlatorBridge: TranslatorBridge) {
    super(tranlatorBridge);
    this.content = content;
  }

  translateText(): string {
    return `Website: ${this.translator.translate(this.content)}`
  }
  
}