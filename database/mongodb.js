const mongoose = require('mongoose');
const URL = 'mongodb+srv://luiz:Lugaw32747511!@cluster0.fflayny.mongodb.net/cadastro_pessoas';
const db = mongoose.connect(URL);
const con = mongoose.connection;

con.on('open', function () {
  console.log('Conectado ao MongoDB!');
});

con.on('error', function () {
  console.log('Erro na conexão com o MongoDB!');
});

con.on('close', function () {
  console.log('Desconetado do MongoDB!');
});

module.exports = db;
