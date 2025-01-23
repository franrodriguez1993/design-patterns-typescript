import IProduct from "../interface/product";

// Memento: Contiene el estado interno del Originator
export class CartMemento {
  constructor(private cart: IProduct[]) {}

  getContent(): IProduct[] {
    return this.cart;
  }
}
