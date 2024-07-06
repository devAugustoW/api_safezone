import 'dotenv/config';
import jwt from 'jsonwebtoken';
import { promisify } from 'util';

const SECRET_KEY = process.env.SECRET_KEY ;

export default async (req, res, next) => {
  // Pegar o Token que vem  no Header da requisição
  const authHeader = req.headers.authorization;

  // Validação de Token inexistente
  if (!authHeader) {
    return res.status(401).json({ error: 'Token não existe.' });
  }

  // barear
  const [, token] = authHeader.split(' ');

  // Verificação de validade do token
  try{
    const decoded = await promisify(jwt.verify)(token, SECRET_KEY);
    
    // Adiciona o id do usuário à requisição
    req.userId = decoded.id;

    return next();

  } catch(error){
    return res.status(404).json({ error: 'Token inválido.'});

  }
};