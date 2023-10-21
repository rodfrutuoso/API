const sqliteConection = require('../../sqlite'); //importando sqlite
const createUsers = require('./createUsers'); //importa o .js creteUsers

async function migrationsRun(){
    const schem = [
        createUsers
    ].join('') //juntando todas as migrações

    //chama a conexão com o sqlite e depois realica a criação do schema no BD
    sqliteConection()
    .then(db => db.exec(schem))
    .catch(error => console.error(error))
}

module.exports = migrationsRun;