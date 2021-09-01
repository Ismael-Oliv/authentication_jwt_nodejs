import { UsersRepository } from '../repositories/Fake/FakeUsersRepository';
import { CreateUsersService } from '../services/CreateUsersServices';
import { AuthenticateUsersSerivce } from '../services/AuthenticateUserService';
import { FakeHashProvider } from '../providers/HashProvider/Fakes/FakeHashProvider';

describe('Authenticate user', () => {
  it('Should be able to authenticate a user', async () => {
    const userRepository = new UsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const createUsersService = new CreateUsersService(
      userRepository,
      fakeHashProvider
    );
    const authenticateUserService = new AuthenticateUsersSerivce(
      userRepository,
      fakeHashProvider
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
    const fakeHashProvider = new FakeHashProvider();

    const authenticateUserService = new AuthenticateUsersSerivce(
      userRepository,
      fakeHashProvider
    );

    expect(
      authenticateUserService.execute({
        email: 'emailFake@email.com',
        password: '1234',
      })
    ).rejects.toBeInstanceOf(Error);
  });

  it('Should not be able to authenticate because the password does not match', async () => {
    const userRepository = new UsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const createUsersService = new CreateUsersService(
      userRepository,
      fakeHashProvider
    );
    const authenticateUserService = new AuthenticateUsersSerivce(
      userRepository,
      fakeHashProvider
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
