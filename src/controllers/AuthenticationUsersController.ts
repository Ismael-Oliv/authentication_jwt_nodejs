import { Request, Response } from "express";
import { AuthenticateUsersSerivce } from "../services/AuthenticateUserService";

const authenticateUsersSerivce = new AuthenticateUsersSerivce();

export class AuthenticationUsersController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { email, password } = request.body;

    const { token, user } = await authenticateUsersSerivce.execute({
      email,
      password,
    });

    return response.json({ token, user });
  }
}
