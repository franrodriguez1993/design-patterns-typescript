import { IUserRepository } from "../../interface/IUserRepository.interface";

export class UserMemoryRepository implements IUserRepository{

  create(): void {
      console.log("User created in memory");
    }
  getById(id: string):void{
    console.log("Get user in memory");
  }
  deleteById(id: string): void {
     console.log("User deleted in memory");
  }
  
}