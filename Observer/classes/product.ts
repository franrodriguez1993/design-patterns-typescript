import { Seller } from "./seller";


// SUBJECT
export class Product {
  private sellers: Seller[] = [];
  
  constructor(private name: string, private price: number, private quantity: number) {}
  
  getInfo() {
    return { name: this.name, price: this.price };
  }

  sell(total: number): void {
    if (this.quantity < total) {
      throw new Error(`Error: No hay suficientes unidades disponibles. Solicitado: ${total}, Disponible: ${this.quantity}`);
    }
    this.quantity -= total;
    this.notify();
  }

  getQuantity(): number {
    return this.quantity;
  }

  attach(seller: Seller): void {
    this.sellers.push(seller);
  }

  detach(seller: Seller): void {
    const index = this.sellers.indexOf(seller);
    if (index !== -1) {
      this.sellers.splice(index, 1);
    }
  }

  private notify(): void {
    this.sellers.forEach(observer => observer.update());
  }
} 