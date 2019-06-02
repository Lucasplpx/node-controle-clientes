const Sequelize = require('sequelize');

// Conexao com o Banco MySql
const sequelize = new Sequelize('cliente', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}