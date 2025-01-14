export interface IUserRepository {
  create(): void;
  getById(id: string): void;
  deleteById(id: string): void;
}