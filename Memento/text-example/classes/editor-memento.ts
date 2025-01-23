// Memento: Contiene el estado interno del Originator
export class EditorMemento {
  constructor(private content: string) {}

  getContent(): string {
    return this.content;
  }
}
