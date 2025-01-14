import { TranslatorBridge } from "./translator";
//Esta es la abstracción
export abstract class ContentManager {
  protected translator: TranslatorBridge // este es el bridge;
  
  constructor(translator: TranslatorBridge) {
    this.translator = translator;
  }

 abstract translateText(): string;
}