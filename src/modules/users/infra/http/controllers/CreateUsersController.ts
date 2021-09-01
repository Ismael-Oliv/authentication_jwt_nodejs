import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateUsersService } from '../../../services/CreateUsersServices';

export class CreateUsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { username, email, password } = request.body;

    const createUsersService = container.resolve(CreateUsersService);

    const user = await createUsersService.create({
      username,
      email,
      password,
    });

    return response.json(user);
  }
}
