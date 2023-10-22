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

    async update (request, response){
        const {name, email} = request.body
        const {id} = request.params;

        const database = await sqliteConection() 
        const user = await database.get("SELECT * FROM users WHERE id = (?)", [id])

        if(!user){
            throw new AppError("Usuário não encontrado")
        }

        const userWithUpdatedEmail = await database.get("SELECT * FROM users WHERE email = (?)",[email])

        if(userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id){
            throw new AppError("Este email já está em uso")
        }
        
        if(!userWithUpdatedEmail){

        }else if(userWithUpdatedEmail.id == user.id){
            throw new AppError("Este já é seu email atual")
        }

        user.name = name
        user.email = email

        await database.run(`
        UPDATE users SET
        name = ?,
        email = ?,
        updated_at = ?
        WHERE id = ?`,
        [user.name,user.email,new Date(), id])

        return response.status(201).json()

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