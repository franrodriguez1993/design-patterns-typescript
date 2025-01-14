export interface IProductRepository {
  create(): void;
  list(): void;
  getById(id: string): void;
  deleteById(id: string): void;
}