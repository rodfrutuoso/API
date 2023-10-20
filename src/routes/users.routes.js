//importando do express
const { Router } = require("express")

//importa o controle de usuario
const UserController = require("../controllers/UserController")

//variavel com o método
const userController = new UserController()

//inicializa as rotas
const userRoutes = Router()

//coloco o middleware para todas as rotas com .use
userRoutes.use(myMiddleware)

//método post
userRoutes.post("/",userController.create)
//userRoutes.post("/", myMiddleware,userController.create)

// userRoutes.post("/", (request, response) => {
//     //const { name, email, password } = request.body;

//     //response.send(`nome: ${name} email: ${email} senha: ${password}`)
//     //response.json({ name, email, password })

// })


function myMiddleware(request,response,next){
    console.log("pasosu pelo middleware")
    if(!request.body.isAdmin){
        return response.status(401).json({message: "O usuário não é Administrador"})
    }

    next()
}

//exportando o arquivo pra outras pessoas poderem usar
module.exports = userRoutes;