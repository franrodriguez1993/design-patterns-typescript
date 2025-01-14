import { IUserRepository } from "../interface/IUserRepository";

export class UserSQLRepository implements IUserRepository{

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