import { BaseHandler } from "../utils/base-handlers";

export class AgeValidator extends BaseHandler {
  handle(request: any): void {
    if (!request.age || request.age < 18) {
      throw new Error('You must be at least 18 years old.');
    }
    console.log('Age is valid.');
    super.handle(request);
  }
}
