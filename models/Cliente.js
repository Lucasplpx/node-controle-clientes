const db = require('../config/connection');


const Cliente = db.sequelize.define('clientes', {
    nome: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    cpf: {
        type: db.Sequelize.STRING
    },
    mensagem: {
        type: db.Sequelize.STRING
    }
})

//Cliente.sync({force: true})

module.exports = Cliente;