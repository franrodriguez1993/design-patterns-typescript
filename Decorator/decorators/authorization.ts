import { ResponseObject } from "../interface/response-object";
import { ResponseDecorator } from "./response.decorator";

export class AuthorizationDecorator extends ResponseDecorator{
  
  handle(): ResponseObject {
    const info = this.response.handle() //extraemos la información base de la respuesta
    if (info.data.email && info.data.name) {
      info.token = "my-token-123456"
    }
    return info; //retornamos la información actualizada
  }
}