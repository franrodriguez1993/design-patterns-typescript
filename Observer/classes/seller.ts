import { Product } from "./product";

// OBSERVER
export class Seller {
  constructor(private name: string, private product: Product) {}

  update(): void {
    console.log(`El vendedor ${this.name} fue notificado. Cantidad disponible: ${this.product.getQuantity()}`);
  }

  sellProduct(total: number): void {
    try {
      this.product.sell(total);
      console.log(`El vendedor ${this.name} vendió ${total} unidades.`);
    } catch (error:any) {
      console.error(`Error al vender: ${error.message}`);
    }
  }
}
