import { CreateUsersService } from './CreateUsersServices';
import { UsersRepository } from '../repositories/Fake/FakeUsersRepository';

describe('Create Users - Service', () => {
  it('Should be able to create a new user', async () => {
    const usersRepository = new UsersRepository();
    const createUsersService = new CreateUsersService(usersRepository);
    const user = await createUsersService.create({
      username: 'Jhon Doe',
      email: 'jhondoe@email.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
  });

  it('Should not be able to create a user already taken', async () => {
    const usersRepository = new UsersRepository();
    const createUsersService = new CreateUsersService(usersRepository);
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
