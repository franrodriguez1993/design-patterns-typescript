// Este es el bridge que une la abstracción con las implementaciones
export interface TranslatorBridge {
  translate(string: string): string;
}