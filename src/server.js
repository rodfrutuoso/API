//const que invoca a biblioteca
const express = require("express");

const app = express();

app.get("/:id/:user", (request, response) =>{
    const {id, user} = request.params

    response.send(`ooooi, migo ${id} para o usuário: ${user}`)
})


app.get("/users", (request, response)=>{
    const {page, limit} = request.query;

    response.send(`A pagina é ${page*2} e o limite é ${limit}`)
})

app.post()

const PORT = 3333;

app.listen(PORT,()=> console.log(`Server is running on port ${PORT}`));