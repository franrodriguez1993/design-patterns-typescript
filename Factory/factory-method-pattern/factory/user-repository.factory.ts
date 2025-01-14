import { IUserRepository } from "../interface/IUserRepository";
import { UserMemoryRepository } from "../repository/user-memory.repository";
import { UserMongoRepository } from "../repository/user-mongo.repository";
import { UserSQLRepository } from "../repository/user-sql.repository";

export class UserRepositoryFactory {

 static getRepository(ddbb: string): IUserRepository{
    switch (ddbb) {
      case 'sql': {
        return new UserSQLRepository();
      }
      case 'mongo': {
        return new UserMongoRepository();
      }
      default: {
        return new UserMemoryRepository();
      }
    }
  }
}