import { Router } from 'express';
import SessionController from './controllers/SessionController';
import LoginController from './controllers/LoginController';
import RiskPointController from './controllers/RiskPointController';

const routes = new Router();


// Cria um usuário
routes.post('/sessions', SessionController.store);

// Logar usuário
routes.post('/login', LoginController.login);

// Criar Ponto de Risco
routes.post('/create', RiskPointController.store);

export default routes;