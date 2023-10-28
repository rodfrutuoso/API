//importando do express
const { Router } = require("express")

//importa o controle de usuario
const TagsController = require("../controllers/TagsController")

//variavel com o método/controller
const tagsController = new TagsController()

//inicializa as rotas
const tagsRoutes = Router()

//método post
tagsRoutes.get("/:user_id", tagsController.index)


module.exports = tagsRoutes;