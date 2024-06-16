import { Router } from 'express';
import SessionController from './controllers/SessionController';
import LoginController from './controllers/LoginController';
import RiskPointController from './controllers/RiskPointController';

const routes = new Router();

// Rota raiz
routes.get('/', (req, res) => {
  res.send('API Rodando');
});

// Cria um usuário
routes.post('/sessions', SessionController.store);

// Logar usuário
routes.post('/login', LoginController.login);

// Rota para criar Ponto de Risco
routes.post('/create', RiskPointController.store);

// Rota para resgatar pontos de marcação no mapa
routes.get('/getlocations', RiskPointController.getLocations);

// Rota para resgatar os Pontos de Risco
routes.get('/getriskpoints', RiskPointController.getriskpoint);

// Rota da Editar Ponto de Risco
routes.put('/update', RiskPointController.updateRiskPoint);

// Rota para deletar Ponto de Risco
routes.delete('/delete/:id', RiskPointController.destroy);

export default routes;