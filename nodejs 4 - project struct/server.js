// Importar node packages
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import 'dotenv/config';

// SERVER ROUTES
import { api } from './routes/index.js';

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

server.use('/api', api);

// http://localhost:4242/api/user/get-simple

// correr server no url host:port definido em .env
server.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, () => {
  console.log(
    'Server up and running at http://%s:%s',
    process.env.SERVER_HOST,
    process.env.SERVER_PORT
  );
});
