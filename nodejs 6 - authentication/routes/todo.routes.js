import Router from 'express';
import {
  getAllTodos,
  getById,
  create,
  update,
  deleteTodo,
} from '../controllers/todo.controller.js';
import { authRequired } from '../utils/jwt.js';

//--ROUTES--//
const todoRoutes = Router();

// http://localhost:4242/api/todo/getAll
todoRoutes.get('/getAll', authRequired, getAllTodos);
todoRoutes.get('/getById/:idGet', getById);
todoRoutes.post('/create', authRequired, create);
todoRoutes.put('/update/:idUpdate', update);
todoRoutes.delete('/delete/:idDelete', deleteTodo);

export { todoRoutes };
