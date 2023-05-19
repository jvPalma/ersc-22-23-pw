import { TodoModel } from '../models/todo.model.js';

/**
 * SELETE * FROM XXXXXX
 * model.findAll()
 *
 * SELETE * FROM XXXXXX WHERE id = 1 (where ID is the primary key)
 * model.findByPk(1)
 */
export const getAllTodos = async (req, res) => {
  // SELETE * FROM TODO
  // SELETE * (sem WHERE) = .findAll();
  // FROM TODO ============ TodoModel
  // resultado da operação = todos
  const todos = await TodoModel.findAll();
  return res.json(todos);
};

export const getById = async (req, res) => {
  //   const id = req.params.idGet;
  //   const object = await TodoModel.findByPk(id);

  const object = await TodoModel.findAll({
    where: { id: req.params.idGet },
  });
  return res.json(object);
};
export const create = async (req, res) => {
  const { morango } = req.body;
  const createdTodo = await TodoModel.create({ todoText: morango });
  return res.json(createdTodo);
};
export const update = async (req, res) => {
  const id = req.params.idUpdate;
  return res.json({ api: 'update' });
};
export const deleteTodo = async (req, res) => {
  const id = req.params.idDelete;
  return res.json({ api: 'deleteTodo' });
};
