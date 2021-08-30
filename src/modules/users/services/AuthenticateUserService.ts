import { sign } from 'jsonwebtoken';
import { compare } from 'bcryptjs';
import Auth from '../../../config/auth';
import { IUsersRespository } from '../repositories/IUsersRepository';

interface IUserData {
  email: string;
  password: string;
}

export class AuthenticateUsersSerivce {
  constructor(private userRespository: IUsersRespository) {}

  public async execute({ email, password }: IUserData) {
    const user = await this.userRespository.FindByEmail(email);

    if (!user) {
      throw new Error('Incorrect gave credentials');
    }

    const matchedPassword = compare(password, user.password);

    if (!matchedPassword) {
      throw new Error('Incorrect gave credentials');
    }

    const { secret, expiresIn } = Auth.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return {
      user,
      token,
    };
  }
}
