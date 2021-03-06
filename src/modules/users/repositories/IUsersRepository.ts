import { Users } from 'modules/users/infra/typeorm/entities/Users';

interface IUser {
  username: string;
  email: string;
  password: string;
}

export interface IUsersRespository {
  create({ username, email, password }: IUser): Promise<Users>;
  FindByEmail(email: string): Promise<Users | undefined>;
}
