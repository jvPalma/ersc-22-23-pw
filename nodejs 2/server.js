// Importar node packages
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import fs from 'fs';
import Router from 'express';
import 'dotenv/config';

//--REST SERVER--//
const app = express();

// client can be postman | react website | react localhost link | etc
const clientURL = 'http://localhost:5500';

// CORS options
const corsOptions = {
  origin: clientURL,
};
app.use(cors(corsOptions));

// output dados de pedido HTTP - logger
app.use(morgan('short'));

// parse dados dos pedidos no content-type - application/json
app.use(express.json());

//TODO: ROUTES VÃO SER COLOCADOS AQUI!
//--ROUTES--//
const router = Router();

const datajson = fs.readFileSync('data.json', 'utf-8'); // Read string-json from file
const data = JSON.parse(datajson); // Parse to JSON

// GET all data method route
router.get('/', (req, res) => {
  console.log(data.nome);
  res.send(data);
});

app.use(router);

// TODO: endpoint to get:
//		- person name
//		- person professional experience list
//		- person current age
//		- person current academic level
//		- person current job

// correr server no url host:port definido em .env
app.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, () => {
  console.log(
    'Server up and running at http://%s:%s',
    process.env.SERVER_HOST,
    process.env.SERVER_PORT
  );
});
