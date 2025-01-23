import { User } from "../classes/user";

export interface ChatMediator {
  sendMessage(message: string, user: User): void;
  addUser(user: User): void;
}
