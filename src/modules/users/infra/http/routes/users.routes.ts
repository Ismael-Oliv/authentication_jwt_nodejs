import { Router } from 'express';

import { AuthenticationUsersController } from '../controllers/AuthenticationUsersController';
import { CreateUsersController } from '../controllers/CreateUsersController';

const usersRoutes = Router();

const authenticationUsersController = new AuthenticationUsersController();
const createUsersController = new CreateUsersController();
usersRoutes.post('/user/login', authenticationUsersController.execute);
usersRoutes.post('/user/create', createUsersController.create);

export { usersRoutes };
