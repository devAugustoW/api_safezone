import { Router } from 'express';
import SessionController from './controllers/SessionController';
import LoginController from './controllers/LoginController';

const routes = new Router();


// Cria um usuário
routes.post('/sessions', SessionController.store);

// Logar usuário
routes.post('/login', LoginController.login);

export default routes;