export class PaymentService {
  processPayment(orderId: string, amount: number): void {
    console.log(`Payment processed for order ${orderId}, amount: $${amount}`);
  }
}
