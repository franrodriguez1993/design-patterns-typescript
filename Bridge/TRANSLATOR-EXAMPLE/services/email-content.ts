import { ContentManager } from "../interface/content-manager";
import { TranslatorBridge } from "../interface/translator";

export class EmailContent extends ContentManager {
  private content: string;
  
  constructor(content: string, tranlatorBridge: TranslatorBridge) {
    super(tranlatorBridge);
    this.content = content;
  }

  translateText(): string {
    return `Email: ${this.translator.translate(this.content)}`
  }
  
}