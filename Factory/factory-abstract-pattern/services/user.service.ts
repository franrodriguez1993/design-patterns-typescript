import { RepositoryFactory } from "../factory/repository.factory";
import { IUserRepository } from "../interface/IUserRepository.interface";

export class UserService{
  private repository:IUserRepository = RepositoryFactory.getUserRepository('sql');


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