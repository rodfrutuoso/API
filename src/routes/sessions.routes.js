//importando do express
const { Router } = require("express")

//importa o controle de usuario
const SessionsController = require("../controllers/SessionsController")

//variavel com o método/controller
const sessionsController = new SessionsController()

//inicializa as rotas
const sessionsRoutes = Router()

//método post
sessionsRoutes.post("/", sessionsController.create)

module.exports = sessionsRoutes;