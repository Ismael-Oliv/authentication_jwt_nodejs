import { hash } from "bcryptjs";

import { Users } from "../database/entities/Users";
import { UsersRepository } from "../database/repository/UsersRepository";

interface ICreateUser {
  username: string;
  email: string;
  password: string;
}

export class CreateUsersService {
  public async create({
    username,
    email,
    password,
  }: ICreateUser): Promise<Users> {
    const usersRepository = new UsersRepository();

    const Existentuser = await usersRepository.FindByEmail(email);

    if (Existentuser) {
      throw new Error("User already exists");
    }

    const hashedPassword = await hash(password, 8);

    const user = await usersRepository.create({
      username,
      email,
      password: hashedPassword,
    });

    console.log(user);

    return user;
  }
}
