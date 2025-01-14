export class OrderService {
  createOrder(productId: string, quantity: number): string {
    console.log(`Order created for product ${productId}, quantity: ${quantity}`);
    return 'ORDER123';
  }
}

