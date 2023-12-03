const knex = require("../database/knex")
const AppError = require("../utils/AppError") //importa biblioteca de erros

class TagsController{
    async index(request,response){
        
        const {user_id} = request.params

        const tags = await knex("tags")
        .where({user_id})

       return response.status(200).json(tags)

    }


}

module.exports = TagsController