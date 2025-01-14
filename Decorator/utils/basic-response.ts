import { IResponse } from "../interface/response";
import { ResponseObject } from "../interface/response-object";

export class BasicResponse implements IResponse {
  handle(): ResponseObject {
    return {
      data:
      {
        email: "",
        name: ""
      },
      user_id: "",
      token: ""
    }
  }
}
