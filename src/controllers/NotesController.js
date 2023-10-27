const knex = require("../database/knex")
const AppError = require("../utils/AppError") //importa biblioteca de erros



class NotesController {
    async create(request, response) {
        const {title, description, tags, links} = request.body
        const {user_id} = request.params;

        const [note_id] = await knex("notes").insert({
            title,
            description,
            user_id
        })

        const linksInsert = links.map(link =>{
            return{
                note_id,
                url : link
            }
        })

        await knex("links").insert(linksInsert)

        const tagsInsert = tags.map(name=>{
            return{
                name,
                user_id,
                note_id
            }
        })

        await knex("tags").insert(tagsInsert)

        response.status(201).json();
    }
}


module.exports = NotesController