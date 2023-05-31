const mongoose = require('mongoose');

const cadastroSchema = new mongoose.Schema({
    codigo: Number,
    nome: String,
    sobreNome: String,
    dataNascimento: String,
    telefone: String,
    endereco: String,
    cidade: String,
    estado: String,
    status: {
        type: String,
        enum: ['Ativo', 'Inativo']
    }
});

module.exports = mongoose.model('cadastros', cadastroSchema);
