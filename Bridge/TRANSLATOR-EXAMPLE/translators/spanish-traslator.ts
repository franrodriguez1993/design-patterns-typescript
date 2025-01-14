import { TranslatorBridge } from "../interface/translator";

export class SpanishTranslator implements TranslatorBridge{

  translate(string: string): string {
    return `Traduciendo al español: ${string}`;
  }
}