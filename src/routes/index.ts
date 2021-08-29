import { Router } from "express";
import { AuthenticationUsersController } from "../controllers/AuthenticationUsersController";
import { CreateUsersController } from "../controllers/CreateUsersController";

const routes = Router();

const authenticationUsersController = new AuthenticationUsersController();
const createUsersController = new CreateUsersController();
routes.post("/user/login", authenticationUsersController.execute);
routes.post("/user/create", createUsersController.create);

export { routes };
