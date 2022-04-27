import { UserRepository } from "./user.repository";

export class UserService{
  constructor(private userRepository = new UserRepository){}

}