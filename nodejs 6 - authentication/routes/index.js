import Router from 'express';

import { todoRoutes } from './todo.routes.js';
import { usersRoutes } from './user.routes.js';

const api = Router();
// http://localhost:4242/api/todo ....
api.use('/todo', todoRoutes);

// http://localhost:4242/api/user ....
api.use('/user', usersRoutes);

export { api };
