import { ChatRoom } from "./classes/chat-room";
import { User } from "./classes/user";

// Uso del patrón Mediator
const chatRoom = new ChatRoom();

const user1 = new User("Alice", chatRoom);
const user2 = new User("Bob", chatRoom);
const user3 = new User("Charlie", chatRoom);

chatRoom.addUser(user1);
chatRoom.addUser(user2);
chatRoom.addUser(user3);

user1.send("Hello everyone!");
user2.send("Hi Alice!");