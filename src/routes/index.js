//importa o Router do express
const { Router } = require("express");

//rota para a rota do usuário
const  userRouter  = require("./users.routes");
const  notesRouter  = require("./notes.routes");

//insere a constante em um "app", nesse caso routes
const routes = Router();

//fala pra o aplicativo usar o arquivo users.routes.js pra acessar os métodos
routes.use("/user", userRouter);
routes.use("/notes", notesRouter);

// exporta as rotas
module.exports = routes;
