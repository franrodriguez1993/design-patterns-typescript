import { BaseHandler } from "../utils/base-handlers";

export class EmailValidator extends BaseHandler {
  handle(request: any): void {
    if (!request.email) {
      throw new Error('Email is required.');
    }
    console.log('Email is valid.');
    super.handle(request); //llama al siguiente en la cadena
  }
}