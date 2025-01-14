import { ResponseObject } from "../interface/response-object";
import { ResponseDecorator } from "./response.decorator";

export class AuthenticationDecorator extends ResponseDecorator{
  
  handle(): ResponseObject {
    const info = this.response.handle() //extraemos la información base de la respuesta
    info.data.email = "user@gmail.com";
    info.data.name = "user";
    info.user_id = "user-1002"
    return info; //retornamos la información actualizada
  }
}