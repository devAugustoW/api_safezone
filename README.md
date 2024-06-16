# API em Node.js, Express, Mongoose e MongoDB Atlas 🚀
Atividade proposta pela disciplina de Mobile do curso de ADS da Faucldade Senac. <br>
Esta API serve uma aplicação React Native voltada para gestão de Pontos de Risco em obras ou indústrias. <br>
 
<br>
<br>

## Descrição 📋
Este projeto consiste em uma API RESTful completa desenvolvida com as seguintes tecnologias: <br>
1. Node.js <br>
2. Express.js <br>
3. Mongoose <br>
4. MongoDB Atlas <br>

<br>
<br>

## Funcionalidades 🔧
1. Criar: Inserir novos Pontos de Risco no banco de dados. <br>
2. Ler: Obter os Pontos de Risco existentes no banco de dados. <br>
3. Atualizar: Modificar os Pontos de Risco existentes no banco de dados. <br>
4. Excluir: Remover os Pontos de Risco do banco de dados. <br>

<br>
<br>

## Pré-requisitos 📦
1. Node.js: Versão 18 ou superior instalado em sua máquina. <br>
2. yarn: Gerenciador de pacotes Node.js. <br>
3. Conta MongoDB Atlas: Crie uma conta no MongoDB Atlas para obter acesso a um banco de dados MongoDB em nuvem. <br>

<br>
<br>

## Instalação 🛠️
1. Clone este repositório para a sua máquina local. <br>
2. Acesse o diretório do projeto. <br>
3. Execute o comando 'yarn install' para instalar as dependências. <br>

<br>
<br>

## Configuração ⚙️
1. Crie um arquivo .env na raiz do projeto. <br>
2. Adicione String de conexão do MongoDB Atlas à uma variável de ambiente ao arquivo .env:
   ```env
   MONGODB_URI=<sua_string_de_conexao_do_MongoDB_Atlas>
   ```
3. Substitua <sua_string_de_conexao_do_MongoDB_Atlas> pela string de conexão do seu banco de dados MongoDB Atlas.

<br>
<br>

## Executando a API ▶️
1. Para iniciar a aplicação, execute o comando:
  ```bash
  yarn dev
  ```

<br>
<br>

## Rotas da API 🌐
1. Logar usuário <br>
 ```bash
routes.post('/login', LoginController.login);
```
  
<br>

2. Criar um Ponto de Risco <br>
```bash
routes.post('/create', RiskPointController.store);
```
  
<br>

3. Resgatar Pontos de Riscos <br>
```bash
routes.get('/getriskpoints', RiskPointController.getriskpoint);
```
  
<br>

4. Resgatar A localização de cada Ponto de Risco <br>
```bash
routes.get('/getlocations', RiskPointController.getLocations);
```
  
<br>

5. Atualizar um Ponto de Risco <br>
```bash
routes.put('/update', RiskPointController.updateRiskPoint);
```
  
<br>

6. Deletar um Ponto de Risco <br>
```bash
routes.delete('/delete/:id', RiskPointController.destroy); 
```

<br>
<br>

## Contribuição 🤝
Suas contribuições para este projeto são muitob bem-vindas! Se você encontrar algum bug ou tiver sugestões de melhorias, por favor, envie um issue no GitHub.

<br>
<br>

## Licença 📚
Este projeto está licenciado sob a MIT License.

