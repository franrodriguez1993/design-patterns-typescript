import { IResponse } from "../interface/response";
import { ResponseObject } from "../interface/response-object";

//Decorador base sobre el que se crearan todos
export abstract class ResponseDecorator implements IResponse {
  protected response: IResponse;

  constructor(response: IResponse) {
    this.response = response;
  }

  handle(): ResponseObject {
    return this.response.handle();
  }
}
