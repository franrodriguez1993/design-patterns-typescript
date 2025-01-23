import { Handler } from "../interface/handler.interface";

export abstract class BaseHandler implements Handler {
  private nextHandler: Handler | null = null;

  setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler; // Permite encadenar manejadores
  }

  handle(request: any): void {
    if (this.nextHandler) {
      this.nextHandler.handle(request);
    }
  }
}
