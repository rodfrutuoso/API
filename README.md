# Anotações

no power shell: npm init -y //cria uma aplicação node
já cria o package.json

pra instalar o express: npm install express --save
o package-lock.json tem as dependências do projeto. Dá pra instalar td só com: npm install

adicionei essa linha em scripts no packagejson pra inicializar a aplicação: "start": "node ./src/server.js",

adicionei o nodemon com o comando no terminal: npm install nodemon --save-dev


# explicando a rota
Ao clicar em send vai pro server, dentro de server tem o app.use(routes) e vai pro arquivo index de routes
lá tem o user q direciona para o user.routes

# controler
Tem as rotas acionam os controlers específicos para realizar a parte "inteligente"

# Middleware
Ele faz a avaliação se a requisição feita eh válida ou não e repassa a informação caso ele autorize
Geralmente a proxima função dps do middleware eh chamada de next

# AppError
Eh utilizada para devolver ao usuário mensagens de erros e para criar excessões para que requests não previstos
não quebrem a aplicação
Para instalar a biblioteca de erros uso npm install express-async-errors --save

# Banco de dados
SQLite instalar: npm install sqlite3 sqlite --save

## criação de tabela no beekeeper

```
create table users (
    id integer PRIMARY KEY AUTOINCREMENT,
    name VARCHAR,
    email VARCHAR,
    password VARCHAR,
    avatar VARCHAR NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
```

## Aprendendo CRUD

```
INSERT INTO users
(name, email, password)
VALUES
('Rodrigo', 'rodrigoo@gmail.com', '456');


SELECT * from users 

UPDATE users SET 
avatar = 'rodrigoFrutuoso.png'
where id = 1

DELETE from users
where id = 6
```

# Criando uma criptografia para a senha
npm install bcryptjs

# instalando query builder
npm install knex --save
npx knex init => para criar o arquivo e começar a configurar
npx knex migrate:make createNotes -> cria o arquivo de migração da tabela 
npx knex migrate:latest => pega a migração e gera a tabela no BD
como coloquei no package.json, dá pra fazer rodando npm run migrate

# JWT - Json Web Token
dividido em 3 partes: XXXX.YYYYY.ZZZZZ
- Header
- Payload
- Verify Signature
npm i jsonwebtoken