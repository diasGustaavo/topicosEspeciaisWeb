import express from 'express';
import mongoose, { ConnectOptions } from 'mongoose';
import { router } from './routes/router';
import {swaggerSpec} from './swagger';
require("dotenv/config")

const connection = process.env.DB_CONNECTION || '';
const swaggerUi = require('swagger-ui-express');
//const setupSwagger = require('./swagger');

mongoose.connect(connection, { useNewUrlParser: true } as ConnectOptions)
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((err: any) => console.error('Erro ao conectar ao MongoDB:', err));

const app = express();
app.use(express.json());
app.use(router);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(3333, () => console.log("Server is running on 3333"));