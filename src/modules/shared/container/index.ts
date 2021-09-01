import { container } from 'tsyringe';

import '../../users/providers';

import { IUsersRespository } from '../../users/repositories/IUsersRepository';
import { UsersRepository } from '../../users/infra/typeorm/repository/UsersRepository';

container.registerSingleton<IUsersRespository>(
  'UsersRepository',
  UsersRepository
);
