import { INTEGER, STRING } from 'sequelize';
import { database } from '../config/context/database.js';
const TodoModel = database.define(
  'todo',
  /*isto é o nome da tabela da base de dados*/ {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    todoText: {
      type: STRING,
      allowNull: false,
    },
  }
);
export { TodoModel };
