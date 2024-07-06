import { Router } from 'express';

import authMiddleware from './middlewares/auth';

import UserController from './controllers/UserController';
import AuthController from './controllers/AuthController';
import RiskPointController from './controllers/RiskPointController';

const routes = new Router();

routes.post('/createusers', UserController.store);

routes.post('/login', AuthController.store);


// Todas as rotas abaixo deste Middleware precisão estar autenticadas
routes.use(authMiddleware);

// Rota para criar Ponto de Risco
routes.post('/create', RiskPointController.store);

// Rota da Editar Ponto de Risco
routes.put('/update/:id', RiskPointController.update);

// Rota para resgatar todos os Pontos de Risco
routes.get('/getriskpoints', RiskPointController.index);

// Rota para deletar Ponto de Risco
routes.delete('/delete/:id', RiskPointController.delete);

// Rota para resgatar pontos de marcação no mapa
routes.get('/getlocations', RiskPointController.getLocations);

export default routes;



