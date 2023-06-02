import Router from 'express';
import { login, register } from '../controllers/user.controller.js';

//--ROUTES--//
const usersRoutes = Router();

// http://localhost:4242/api/user/login
usersRoutes.post('/login', login);

// http://localhost:4242/api/user/register
usersRoutes.post('/register', register);

export { usersRoutes };
