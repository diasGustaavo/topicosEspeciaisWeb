import express from 'express';
import mongoose, { ConnectOptions } from 'mongoose';
import { router } from './routes/router';
require("dotenv/config")

const connection = process.env.DB_CONNECTION || '';

mongoose.connect(connection, { useNewUrlParser: true } as ConnectOptions)
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((err: any) => console.error('Erro ao conectar ao MongoDB:', err));

const app = express();
app.use(express.json());
app.use(router);

app.listen(3333, () => console.log("Server is running on 3333"));