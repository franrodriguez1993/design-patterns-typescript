import { Logger } from "../utils/logger";

export class UserService {
  private logger: Logger;

  constructor() {
    this.logger = Logger.getInstance();
  }

  create() {
    this.logger.logInfo("Create user");
    return null;
  }

  getById(id: string) {
    this.logger.logInfo("Get user by id");
    return null;
  }

  deleteById(id: string) {
    this.logger.logInfo("Delete user by id");
    return null;
  }

}