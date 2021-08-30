import { hash } from 'bcryptjs';
import { Users } from '../database/entities/Users';
import { IUsersRespository } from 'repositories/IUsersRepository';

interface ICreateUser {
  username: string;
  email: string;
  password: string;
}

export class CreateUsersService {
  constructor(private repository: IUsersRespository) {}

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
