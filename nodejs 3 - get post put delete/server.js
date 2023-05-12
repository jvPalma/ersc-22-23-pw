// Importar node packages
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import fs from 'fs';
import Router from 'express';
import 'dotenv/config';

//--REST SERVER--//
const server = express();

// client can be postman | react website | react localhost link | etc
const clientURL = 'http://localhost:5500';

// CORS options
const corsOptions = {
  origin: clientURL,
};
server.use(cors(corsOptions));

// output dados de pedido HTTP - logger
server.use(morgan('short'));

// parse dados dos pedidos no content-type - application/json
server.use(express.json());

//TODO: ROUTES VÃO SER COLOCADOS AQUI!
//--ROUTES--//
const api = Router();

const datajson = fs.readFileSync('data.json', 'utf-8'); // Read string-json from file
const data = JSON.parse(datajson); // Parse to JSON

// GET all data method route
// http://localhost:4242/
api.get('/', (req, res) => {
  res.send(data);
});

// http://localhost:4242/name
api.get('/name', (req, res) => {
  res.send(data.nome);
});

// http://localhost:4242/name
api.get('/prof-exp', (req, res) => {
  res.send(data.hab_profissionais);
});

// http://localhost:4242/age
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

// http://localhost:4242/academic-level
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

// http://localhost:4242/current-job
api.get('/current-job', (req, res) => {
  res.send(
    data.hab_profissionais.filter(
      (habilitacoes) => habilitacoes.data_fim === null
    )
  );
});

// http://localhost:4242/get-simple
api.get('/get-simple', (req, res) => {
  res.send('get-simple');
});

// http://localhost:4242/get-params/qualquerCoisa
api.get('/get-params/:chocolat', (req, res) => {
  res.send('get-params ' + req.params.chocolat);
});

// http://localhost:4242/get-query-params ? key = value & key2 = value2
api.get('/get-query-params', (req, res) => {
  //   res.send('get-query-params ' + JSON.stringify(req.query));
  res.send('get-query-params ' + req.query.test1);
});

// http://localhost:4242/post-simple
api.post('/post-simple', (req, res) => {
  res.send('post-simple');
});

server.use(api);

// correr server no url host:port definido em .env
server.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, () => {
  console.log(
    'Server up and running at http://%s:%s',
    process.env.SERVER_HOST,
    process.env.SERVER_PORT
  );
});
