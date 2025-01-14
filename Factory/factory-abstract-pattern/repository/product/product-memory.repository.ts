import { IProductRepository } from "../../interface/IProductRepository.interface";

export class ProductMemoryRepository implements IProductRepository{

  create(): void {
      console.log("User created in memory");
  }
  list(): void{
    console.log("List product in memory")
  }
  getById(id: string):void{
    console.log("Get user in memory");
  }
  deleteById(id: string): void {
     console.log("User deleted in memory");
  }
  
}