import { EditorMemento } from "./editor-memento";

 // Caretaker: Gestiona los Mementos
export class HistoryMemento {
  private mementos: EditorMemento[] = [];

  push(memento: EditorMemento): void {
    this.mementos.push(memento);
  }

  pop(): EditorMemento | undefined {
    return this.mementos.pop();
  }
}