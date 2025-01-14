import { IProductRepository } from "../interface/IProductRepository.interface";
import { IUserRepository } from "../interface/IUserRepository.interface";
import { ProductMemoryRepository } from "../repository/product/product-memory.repository";
import { ProductMongoRepository } from "../repository/product/product-mongo.repository";
import { ProductSQLRepository } from "../repository/product/product-sql.repository";
import { UserMemoryRepository } from "../repository/user/user-memory.repository";
import { UserMongoRepository } from "../repository/user/user-mongo.repository";
import { UserSQLRepository } from "../repository/user/user-sql.repository";

export class RepositoryFactory {

 static getUserRepository(ddbb: string): IUserRepository {
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

   static getProductRepository(ddbb: string): IProductRepository {
    switch (ddbb) {
      case 'sql': {
        return new ProductSQLRepository();
      }
      case 'mongo': {
        return new ProductMongoRepository();
      }
      default: {
        return new ProductMemoryRepository();
      }
    }
  }

}