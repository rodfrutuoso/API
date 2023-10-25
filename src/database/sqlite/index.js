//importa bibliotecas
const sqlite3 = require("sqlite3"); //drive de fato com a versão
const sqlite = require("sqlite"); //responsável por conectar
const path = require("path")//biblioteca de ajuste de caminho de arquivo pra nao bugar do windows pra outros sistemas operecionais

/**
 * função que cria a conexão, tem q ser async pra conectar
 * se não existir ele cria
 */
async function sqliteConection(){
    //abre a conexão
    const database = await sqlite.open({
        filename: path.resolve(__dirname,"..","database.db"), //onde vai salvar o arquivo
        driver: sqlite3.Database //o drive de fato que vai fazer a conexão
    })

    return database
}

module.exports = sqliteConection;