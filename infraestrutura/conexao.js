const mysql = require('mysql2')

const conexao  = mysql.createConnection({
    database: 'agenda-petshop',
    host: 'localhost',
    user: 'root',
    password: '@Root1230',
    port: '3306'
})

module.exports = conexao