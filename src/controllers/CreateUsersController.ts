import { Request, Response } from "express";
import { CreateUsersService } from "../services/CreateUsersServices";

const createUsersService = new CreateUsersService();
export class CreateUsersController {
   public async create(
      request: Request,
      response: Response
   ): Promise<Response> {
      const { username, email, password } = request.body;

      const user = createUsersService.create({
         username,
         email,
         password,
      });

      return response.json(user);
   }
}
