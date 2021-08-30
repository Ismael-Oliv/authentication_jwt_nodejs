import { Request, Response } from 'express';
import { AuthenticateUsersSerivce } from '../services/AuthenticateUserService';
import { UsersRepository } from '../database/repository/UsersRepository';

export class AuthenticationUsersController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { email, password } = request.body;

    const usersRepository = new UsersRepository();
    const authenticateUsersSerivce = new AuthenticateUsersSerivce(
      usersRepository
    );
    const { token, user } = await authenticateUsersSerivce.execute({
      email,
      password,
    });

    return response.json({ token, user });
  }
}
