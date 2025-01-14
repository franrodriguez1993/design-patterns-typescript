import { UserService } from "./services/user.service";

const userService = new UserService();

// ejecutar service:
const bufferImage = Buffer.alloc(5)
userService.updateProfilePic("asdasd",bufferImage);