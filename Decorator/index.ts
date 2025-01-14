import { BasicResponse } from "./utils/basic-response";
import { AuthenticationDecorator } from "./decorators/auth";
import { AuthorizationDecorator } from "./decorators/authorization";

const basicResponse = new BasicResponse();
const auth = new AuthenticationDecorator(basicResponse);
const authorization = new AuthorizationDecorator(auth);

console.log(authorization.handle());
