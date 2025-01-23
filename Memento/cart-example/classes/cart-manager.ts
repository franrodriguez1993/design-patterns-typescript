import IProduct from "../interface/product";
import { CartMemento } from "./cart-memento";

// Originator: Crea y restaura su propio Memento
export class CartManager {
  private cart: IProduct[] = [];

  add(product: IProduct): void {
    this.cart.push(product);
  }

  getContent(): IProduct[] {
    return this.cart;
  }

  save(): CartMemento {
    return new CartMemento([...this.cart]); //se debe crear un nuevo array para evitar que se pase la referencia
  }

  restore(memento: CartMemento): void {
    this.cart = [...memento.getContent()]; //se debe crear un nuevo array para evitar que se pase la referencia
  }
}
