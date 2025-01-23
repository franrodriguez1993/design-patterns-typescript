import { EditorMemento } from "./editor-memento";

// Originator: Crea y restaura su propio Memento
export class TextEditor {
  private content: string = '';

  write(text: string): void {
    this.content += text;
  }

  getContent(): string {
    return this.content;
  }

  save(): EditorMemento {
    return new EditorMemento(this.content);
  }

  restore(memento: EditorMemento): void {
    this.content = memento.getContent();
  }
}
