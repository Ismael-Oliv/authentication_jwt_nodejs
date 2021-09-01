import { container } from 'tsyringe';

import { IUsersRespository } from '../../users/repositories/IUsersRepository';
import { UsersRepository } from '../../users/infra/typeorm/repository/UsersRepository';

container.registerSingleton<IUsersRespository>(
  'UsersRepository',
  UsersRepository
);
