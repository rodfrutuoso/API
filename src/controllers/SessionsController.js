const knex = require("../database/knex")
const AppError = require("../utils/AppError") //importa biblioteca de erros

class SessionsController {
    async create (request,response){
        const {email,password} = request.body

        return response.json({email,password});
    }
}

module.exports = SessionsController