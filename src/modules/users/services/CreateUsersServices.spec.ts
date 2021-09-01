import { CreateUsersService } from './CreateUsersServices';
import { UsersRepository } from '../repositories/Fake/FakeUsersRepository';
import { FakeHashProvider } from '../providers/HashProvider/Fakes/FakeHashProvider';

describe('Create Users - Service', () => {
  it('Should be able to create a new user', async () => {
    const usersRepository = new UsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const createUsersService = new CreateUsersService(
      usersRepository,
      fakeHashProvider
    );
    const user = await createUsersService.create({
      username: 'Jhon Doe',
      email: 'jhondoe@email.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
  });

  it('Should not be able to create a user already taken', async () => {
    const usersRepository = new UsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const createUsersService = new CreateUsersService(
      usersRepository,
      fakeHashProvider
    );
    await createUsersService.create({
      username: 'Jhon Doe',
      email: 'jhondoe@email.com',
      password: '123456',
    });

    expect(
      createUsersService.create({
        username: 'Jhon Doe',
        email: 'jhondoe@email.com',
        password: '123456',
      })
    ).rejects.toBeInstanceOf(Error);
  });
});
