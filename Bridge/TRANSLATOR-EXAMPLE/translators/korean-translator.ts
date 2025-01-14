import { TranslatorBridge } from "../interface/translator";

export class KoreanTranslator implements TranslatorBridge{

  translate(string: string): string {
    return `한국어로 번역: ${string}`;
  }
}