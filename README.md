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