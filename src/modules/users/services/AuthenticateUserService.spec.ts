import { UsersRepository } from '../repositories/Fake/FakeUsersRepository';
import { CreateUsersService } from '../services/CreateUsersServices';
import { AuthenticateUsersSerivce } from '../services/AuthenticateUserService';

describe('Authenticate user', () => {
  it('Should be able to authenticate a user', async () => {
    const userRepository = new UsersRepository();
    const createUsersService = new CreateUsersService(userRepository);
    const authenticateUserService = new AuthenticateUsersSerivce(
      userRepository
    );

    const { email, password } = await createUsersService.create({
      username: 'Jhon Doe',
      email: 'jhondoe@gmail.com',
      password: '123456',
    });

    const auth = await authenticateUserService.execute({
      email,
      password,
    });

    expect(auth).toHaveProperty('user');
    expect(auth).toHaveProperty('token');
  });

  it('Should not be able to authenticate because the email was not found', async () => {
    const userRepository = new UsersRepository();
    const createUsersService = new CreateUsersService(userRepository);
    const authenticateUserService = new AuthenticateUsersSerivce(
      userRepository
    );

    const user = await createUsersService.create({
      username: 'Jhon Doe',
      email: 'jhondoe@gmail.com',
      password: '123456',
    });

    const email = 'emailFake@email.com';

    expect(
      authenticateUserService.execute({
        email,
        password: user.password,
      })
    ).rejects.toBeInstanceOf(Error);
  });
  it('Should not be able to authenticate because the password does not match', async () => {
    const userRepository = new UsersRepository();
    const createUsersService = new CreateUsersService(userRepository);
    const authenticateUserService = new AuthenticateUsersSerivce(
      userRepository
    );

    const user = await createUsersService.create({
      username: 'Jhon Doe',
      email: 'jhondoe@gmail.com',
      password: '123456',
    });

    const password = '123';

    expect(
      authenticateUserService.execute({
        email: user.email,
        password,
      })
    ).rejects.toBeInstanceOf(Error);
  });
});
