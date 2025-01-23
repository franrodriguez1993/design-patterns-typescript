import { CartMemento } from "./cart-memento";

 // Caretaker: Gestiona los Mementos
export class HistoryMemento {
  private mementos: CartMemento[] = [];

  push(memento: CartMemento): void {
    this.mementos.push(memento);
  }

  pop(): CartMemento | undefined {
    return this.mementos.pop();
  }
}