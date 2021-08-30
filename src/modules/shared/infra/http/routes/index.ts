import { usersRoutes } from '../../../../users/infra/http/routes/users.routes';
import { Router } from 'express';

const routes = Router();

routes.use(usersRoutes);

export { routes };
