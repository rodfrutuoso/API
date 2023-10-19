//nome da classe igual ao do arquivo
class UserController {
    /**
     * index - GET para listar vários registros
     * show - GET para exibir um registro específico
     * create - POST para criar um registro
     * upadte - PUT para atualizar o registro
     * delete - DELETE para remover um registro
     */
    create(request, response){
        const { name, email, password } = request.body;

        response.status(201).json({ name, email, password })
    }
}

//exporteo a classe para todo o projeto
module.exports = UserController