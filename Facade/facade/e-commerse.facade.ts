import { NotificationService } from "../services/notification.service";
import { OrderService } from "../services/order.service";
import { PaymentService } from "../services/payment.service";

// manejamos toda la lógica de la interacción de los servicios en esta clase.
export class ECommerceFacade {
  private orderService = new OrderService();
  private paymentService = new PaymentService();
  private notificationService = new NotificationService();

  placeOrder(productId: string, quantity: number, amount: number): void {
    const orderId = this.orderService.createOrder(productId, quantity);
    this.paymentService.processPayment(orderId, amount);
    this.notificationService.sendNotification(orderId);
  }
}
