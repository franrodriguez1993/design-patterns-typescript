import { IProductRepository } from "../../interface/IProductRepository.interface";

export class ProductMongoRepository implements IProductRepository{

  list(): void {
    console.log("List products with mongo");
  }

  create(): void {
      console.log("User created with mongo");
    }
  getById(id: string):void{
    console.log("Get user with mongo");
  }
  deleteById(id: string): void {
     console.log("User deleted with mongo");
  }
  
}