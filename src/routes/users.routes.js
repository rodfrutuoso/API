//importando do express
const { Router } = require("express")

//inicializa as rotas
const userRoutes = Router()

//método post
userRoutes.post("/", (request, response) => {
    const { name, email, password } = request.body;

    //response.send(`nome: ${name} email: ${email} senha: ${password}`)
    response.json({ name, email, password })
})

//exportando o arquivo pra outras pessoas poderem usar
module.exports = userRoutes;