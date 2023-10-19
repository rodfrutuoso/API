//configurações do server
//const que invoca a biblioteca express
const express = require("express");

//importação das rotas. Já pega o index por padrão e a partir dele manda pro resto
const routes = require("./routes")

//inicializa o express pra poder usar
const app = express();

//diz para o node que as informações vão vir em formato de json
app.use(express.json())

//direciona do server para a pasta de rotas
app.use(routes)

//a porta do node
const PORT = 3333;

//eh o que ele faz quando inicia
app.listen(PORT, () => console.log(`Server está rodnado na porta ${PORT}`));

// app.get("/:id/:user", (request, response) =>{
//     //parametros, Route Params que são obrigatórios
//     const {id, user} = request.params;

//     response.send(`ooooi, migo ${id} para o usuário: ${user}`)
// })

// //criando uma requisição do tipo get, pra ficar no local host somente troque o /users por /
// //os parâmetros não são obrigatórios

// app.get("/users", (request, response)=>{
//     //cria um query params, nesse caso eu tenho q passar localhost:3333/?page=2&limit=4
//     const {page, limit} = request.query;

//     response.send(`A pagina é ${page*2} e o limite é ${limit}`)
// })

// //criando o post
// app.post("/usuario", (request,response)=>{
//     const {name,email,password} = request.body;

//     //response.send(`nome: ${name} email: ${email} senha: ${password}`)
//     response.json({name,email,password})
// })
