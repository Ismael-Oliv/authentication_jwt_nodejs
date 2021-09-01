import { IHashProvider } from '../providers/HashProvider/Models/IHashProvider';
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
    private repository: IUsersRespository,

    @inject('IHashProvider')
    private hashProvider: IHashProvider
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

    const hashedPassword = await this.hashProvider.generateHash(password);

    const user = await this.repository.create({
      username,
      email,
      password: hashedPassword,
    });

    return user;
  }
}
