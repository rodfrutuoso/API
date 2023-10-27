//importando do express
const { Router } = require("express")

//importa o controle de usuario
const NotesController = require("../controllers/NotesController")

//variavel com o método/controller
const notesController = new NotesController()

//inicializa as rotas
const notesRoutes = Router()

//método post
notesRoutes.post("/:user_id", notesController.create)
notesRoutes.get("/:id", notesController.show)

module.exports = notesRoutes;
