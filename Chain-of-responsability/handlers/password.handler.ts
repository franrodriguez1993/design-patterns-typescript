import { BaseHandler } from "../utils/base-handlers";

export class PasswordValidator extends BaseHandler {
  handle(request: any): void {
    if (!request.password || request.password.length < 8) {
      throw new Error('Password must be at least 8 characters long.');
    }
    console.log('Password is valid.');
    super.handle(request); //llama al siguiente en la cadena
  }
}