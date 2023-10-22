const sqliteConection = require("../database/sqlite");//importa a conexão com banco de dados
const AppError = require("../utils/AppError") //importa biblioteca de erros
const {hash} = require("bcryptjs")

//nome da classe igual ao do arquivo
class UserController {
    //função que realiza a criação do usuário
    async create(request, response){
        const { name, email, password } = request.body;
        
        const database = await sqliteConection() 
        const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email])

        if(checkUserExists){
            throw new AppError("Esse email já está em uso")
        }

        const hashedPassword = await hash(password, 8)

        await database.run("INSERT INTO  users (name, email, password) VALUES (?, ?, ?)",
        [name,email,hashedPassword])

        return response.status(201).json();
    }
}

//exporteo a classe para todo o projeto
module.exports = UserController

// o código abaixo ficava dentro do create() pra testar se o post estava funcionando
// if(!name){
    //     throw new AppError("Nome é Obrigatório")
    // }
    
    // response.status(201).json({ name, email, password })


    /**
     * index - GET para listar vários registros
     * show - GET para exibir um registro específico
     * create - POST para criar um registro
     * upadte - PUT para atualizar o registro
     * delete - DELETE para remover um registro
     */