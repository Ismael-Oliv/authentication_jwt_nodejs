import { hash } from 'bcryptjs';
import { Users } from '../infra/typeorm/entities/Users';
import { inject, injectable } from 'tsyringe';
import { IUsersRespository } from '../repositories/IUsersRepository';

interface ICreateUser {
  username: string;
  email: string;
  password: string;
}

@injectable()
export class CreateUsersService {
  constructor(
    @inject('UsersRepository')
    private repository: IUsersRespository
  ) {}

  public async create({
    username,
    email,
    password,
  }: ICreateUser): Promise<Users> {
    const Existentuser = await this.repository.FindByEmail(email);

    if (Existentuser) {
      throw new Error('User already exists');
    }

    const hashedPassword = await hash(password, 8);

    const user = await this.repository.create({
      username,
      email,
      password: hashedPassword,
    });

    return user;
  }
}
