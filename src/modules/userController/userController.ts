import { UserService } from "./user.service";

export class UserController{
  constructor(private userService = new UserService()){}

}