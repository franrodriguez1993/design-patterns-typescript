import { TranslatorBridge } from "../interface/translator";

export class EnglishTranslator implements TranslatorBridge{

  translate(string: string): string {
    return `Translating to English: ${string}`;
  }
}