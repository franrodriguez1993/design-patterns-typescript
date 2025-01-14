import { ResponseObject } from "./response-object";

export interface IResponse {
  handle(): ResponseObject;
}