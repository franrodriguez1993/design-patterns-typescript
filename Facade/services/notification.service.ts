export class NotificationService {
  sendNotification(orderId: string): void {
    console.log(`Notification sent for order ${orderId}`);
  }
}
