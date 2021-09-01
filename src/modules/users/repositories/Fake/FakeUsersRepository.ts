import { Users } from '../../infra/typeorm/entities/Users';
import { IUsersRespository } from '../IUsersRepository';
import { v4 as uuid } from 'uuid';

interface ICreateUser {
  username: string;
  email: string;
  password: string;
}

export class UsersRepository implements IUsersRespository {
  private UserData: Users[] = [];

  public async create({
    username,
    email,
    password,
  }: ICreateUser): Promise<Users> {
    const user = new Users();
    Object.assign(user, {
      id: uuid(),
      username,
      email,
      password,
    });

    this.UserData.push(user);

    return user;
  }

  public async FindByEmail(email: string): Promise<Users | undefined> {
    const ExistenUser = this.UserData.find((user) => user.email === email);

    return ExistenUser;
  }
}
