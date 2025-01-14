import { UserRepositoryFactory } from "../factory/user-repository.factory";
import { IUserRepository } from "../interface/IUserRepository";

export class UserService{
  private repository:IUserRepository = UserRepositoryFactory('sql');

  create() {
    this.repository.create();
  }

  getById(id: string) {
    this.repository.getById(id);
  }

  deleteById(id: string) {
    this.repository.deleteById(id);
  }

}