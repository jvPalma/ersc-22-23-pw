import Router from 'express';
import { getAllTodos } from '../controllers/todo.controller.js';

//--ROUTES--//
const todoRoutes = Router();

todoRoutes.get('/getAll', getAllTodos);

export { todoRoutes };
