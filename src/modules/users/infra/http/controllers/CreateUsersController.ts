import { Request, Response } from 'express';
import { CreateUsersService } from '../../../services/CreateUsersServices';
import { UsersRepository } from '../../typeorm/repository/UsersRepository';

export class CreateUsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { username, email, password } = request.body;

    const usersRepository = new UsersRepository();
    const createUsersService = new CreateUsersService(usersRepository);

    const user = await createUsersService.create({
      username,
      email,
      password,
    });

    return response.json(user);
  }
}
