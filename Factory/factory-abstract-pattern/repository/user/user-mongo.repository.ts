import { IUserRepository } from "../../interface/IUserRepository.interface";


export class UserMongoRepository implements IUserRepository{

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