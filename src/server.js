//configurações do server
//const que invoca a biblioteca express
const express = require("express");

//inicializa o express pra poder usar
const app = express();


app.get("/:id/:user", (request, response) =>{
    //parametros, Route Params que não são obrigatórios
    const {id, user} = request.params

    response.send(`ooooi, migo ${id} para o usuário: ${user}`)
})

//criando uma requisição do tipo get, pra ficar no local host somente troque o /users por /
app.get("/users", (request, response)=>{
    //cria um query params, nesse caso eu tenho q passar localhost:3333/?page=2&limit=4
    const {page, limit} = request.query;

    response.send(`A pagina é ${page*2} e o limite é ${limit}`)
})

app.post()

//a porta do node
const PORT = 3333;

//eh o que ele faz quando inicia
app.listen(PORT,()=> console.log(`Server está rodnado na porta ${PORT}`));