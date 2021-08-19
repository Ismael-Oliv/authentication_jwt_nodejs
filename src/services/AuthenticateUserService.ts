import { sign } from "jsonwebtoken";
import { compare } from "bcryptjs";
import { UsersRepository } from "../database/repository/UsersRepository";
import Auth from "../config/auth";

interface IUserData {
   email: string;
   password: string;
}

const usersRepository = new UsersRepository();
export class AuthenticateUsersSerivce {
   public async execute({ email, password }: IUserData) {
      const user = await usersRepository.FindByEmail(email);

      if (!user) {
         throw new Error("Incorrect gave credentials");
      }

      const matchedPassword = compare(password, user.password);

      if (!matchedPassword) {
         throw new Error("Incorrect gave credentials");
      }

      const { secret, expiresIn } = Auth.jwt;

      const token = sign({}, secret, {
         subject: user.id,
         expiresIn,
      });

      return {
         user,
         token,
      };
   }
}
