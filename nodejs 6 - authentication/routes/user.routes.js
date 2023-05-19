import Router from 'express';
import { login, register } from '../controllers/user.controller.js';

//--ROUTES--//
const usersRoutes = Router();

// http://localhost:4242/api/todo/getAll
usersRoutes.post('/login', login);
usersRoutes.post('/register', register);

export { usersRoutes };
