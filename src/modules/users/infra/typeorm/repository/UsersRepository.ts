import { getRepository } from 'typeorm';
import { Users } from '../entities/Users';

interface ICreateUser {
  username: string;
  email: string;
  password: string;
}

export class UsersRepository {
  public async create({
    username,
    email,
    password,
  }: ICreateUser): Promise<Users> {
    const repository = getRepository(Users);
    const user = repository.create({
      username,
      email,
      password,
    });

    await repository.save(user);

    return user;
  }

  public async FindByEmail(email: string): Promise<Users | undefined> {
    const repository = getRepository(Users);
    const ExistenUser = await repository.findOne({
      where: {
        email,
      },
    });

    return ExistenUser;
  }
}
