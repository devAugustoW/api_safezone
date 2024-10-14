import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes';
class App{
  constructor(){
    this.server = express();

		mongoose.connect(process.env.MONGO_URI)
		.then(() => console.log('Conectado ao MongoDB'))
		.catch((error) =>console.error('Erro ao conectar ao MongoDB:', error));

    this.middlewares();
    this.routes();      
  }
  middlewares(){
    this.server.use(cors({
      origin: '*',
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization']
    }));
    this.server.use(express.json());
  }
  routes(){
    this.server.use(routes)
  }
}
export default new App().server;