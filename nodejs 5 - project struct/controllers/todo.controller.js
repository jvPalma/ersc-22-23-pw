import { TodoModel } from '../models/todo.model.js';

/**
 * SELETE * FROM XXXXXX
 * model.findAll()
 *
 * SELETE * FROM XXXXXX WHERE id = 1 (where ID is the primary key)
 * model.findByPk(1)
 */
export const getAllTodos = async (req, res) => {
  const todos = await TodoModel.findAll();

  return res.json(todos);
};
