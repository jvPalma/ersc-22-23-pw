import Router from 'express';
import { todoRoutes } from './todo.js';

//--ROUTES--//
const api = Router();

// routes do todo vai ser algo como
// http://localhost:4242/api/todo ....
api.use('/todo', todoRoutes);

export { api };
