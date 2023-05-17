import fs from 'fs';
import Router from 'express';
import { todoRoutes } from './todo.js';

//TODO: ROUTES VÃO SER COLOCADOS AQUI!
//--ROUTES--//
const api = Router();

const datajson = fs.readFileSync('data.json', 'utf-8'); // Read string-json from file
const data = JSON.parse(datajson); // Parse to JSON

// GET all data method route
// http://localhost:4242/api/
api.get('/', (req, res) => {
  res.send(data);
});

// http://localhost:4242/api/name
api.get('/name', (req, res) => {
  res.send(data.nome);
});

// http://localhost:4242/api/prof-exp
api.get('/prof-exp', (req, res) => {
  res.send(data.hab_profissionais);
});

// http://localhost:4242/api/age
api.get('/age', (req, res) => {
  const data1 = new Date(data.data_nascimento);
  const data2 = new Date();

  const diff = data2.getTime() - data1.getTime();

  function convertmili(mSeconds) {
    var checkYear = Math.floor(mSeconds / 31536000000);
    return checkYear;
  }
  res.json({ currentAge: convertmili(diff) });
});

// http://localhost:4242/api/academic-level
api.get('/academic-level', (req, res) => {
  res.send(
    data.hab_academicas
      .sort((a, b) => {
        const keyA = new Date(a.data_fim);
        const keyB = new Date(b.data_fim);
        // Compare the 2 dates
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
      })
      .filter((habilitacoes) => habilitacoes.data_fim !== null)[0]
  );
});

// http://localhost:4242/api/current-job
api.get('/current-job', (req, res) => {
  res.send(
    data.hab_profissionais.filter(
      (habilitacoes) => habilitacoes.data_fim === null
    )
  );
});

// http://localhost:4242/api/get-simple
api.get('/get-simple', (req, res) => {
  res.send('get-simple');
});

// http://localhost:4242/api/get-params/qualquerCoisa
api.get('/get-params/:chocolat', (req, res) => {
  res.send('get-params ' + req.params.chocolat);
});

// http://localhost:4242/api/get-query-params ? key = value & key2 = value2
api.get('/get-query-params', (req, res) => {
  //   res.send('get-query-params ' + JSON.stringify(req.query));
  res.send('get-query-params ' + req.query.test1);
});

// http://localhost:4242/api/post-simple
api.post('/post-simple', (req, res) => {
  res.send('post-simple');
});

// CREATE DATABASE pw;
// CREATE USER 'pw'@'%' IDENTIFIED BY 'pw';
// GRANT ALL PRIVILEGES ON *.* TO 'pw'@'%' WITH GRANT OPTION;
// FLUSH PRIVILEGES;

// const userRoutes = Router();
// userRoutes.get('/get-simple', (req, res) => {
//   res.send('v1 get-simple');
// });

// const studentRoutes = Router();
// studentRoutes.get('/get-simple', (req, res) => {
//   res.send('v2 get-simple');
// });

// npm i --save sequelize

// server.use('/api/user', userRoutes);
// server.use('/api/studentRoutes', studentRoutes);
// api.use('/user', userRoutes);
// api.use('/student', studentRoutes);

// routes do todo vai ser algo como
// http://...... /todo ....
api.use('/todo', todoRoutes);

export { api };
