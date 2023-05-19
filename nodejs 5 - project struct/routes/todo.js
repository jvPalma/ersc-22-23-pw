import Router from 'express';
import {
  getAllTodos,
  getById,
  create,
  update,
  deleteTodo,
} from '../controllers/todo.controller.js';

//--ROUTES--//
const todoRoutes = Router();

// http://localhost:4242/api/todo/getAll
todoRoutes.get('/getAll', getAllTodos);
todoRoutes.get('/getById/:idGet', getById);
todoRoutes.post('/create', create);
todoRoutes.put('/update/:idUpdate', update);
todoRoutes.delete('/delete/:idDelete', deleteTodo);

export { todoRoutes };
