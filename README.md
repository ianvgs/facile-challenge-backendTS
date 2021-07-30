Manual de uso

HEROKU-LINK: https://facile-challenge-backend.herokuapp.com/

ROTAS
POST: https://facile-challenge-backend.herokuapp.com/registro /
Função: Cadastra um registro e retorna o ID e o registro informado encriptado:
Key e values obrigatórios: name:string.
Formato do envio: ’JSON’.

GET : https://facile-challenge-backend.herokuapp.com/registro/:id
Função: Lista registro informando o id:
Key e values obrigatórios: id:integer.
Formato da requisição:params.


Manual de instalação
Necessário ter Node.js instalado na máquina e banco postgresq. 
Realizar o download do código, extrair, acessar o diretório “\facile-challenge-backend”.
Criar arquivo ‘.env’ informando os sequintes valores para a configuração do banco de dados:

DATABASE=facile-backend-test-ian
DB_HOST=exemplo
DB_PASSWORD=exemplo 
DB_PORT=exemplo
DB_USER=exemplo 
*Não se preocupe, os scripts abaixo realizarão a criação da database, informe corretamente os dados de acesso ao banco de dados sem utilizar “”.


Utilizando o terminal, no diretório “\facile-challenge-backend”,  comandar os scripts:
1- NPM install 
2 - Npx sequelize db:create
3 - Npx sequelize db:migrate
5 - Npm start
Pronto, já está criado o database “facile-backend-test-ian
”, a tabela “facile”.

Configurei o servidor pra subir na porta 3000, caso deseje alterar, informar no arquivo “.env” o valor de (PORT=valor),que o sistema automaticamente utilizará a porta enviada.


Att. Ian Guedes


