import { IProductRepository } from "../../interface/IProductRepository.interface";

export class ProductSQLRepository implements IProductRepository{
  list(): void {
    console.log("List products with SQL");
  }

  create(): void {
      console.log("User created with SQL");
    }
  getById(id: string):void{
    console.log("Get user with SQL");
  }
  deleteById(id: string): void {
     console.log("User deleted with SQL");
  }
  
}