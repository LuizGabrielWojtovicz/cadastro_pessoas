const cadastroModel = require('../cadastros/cadastroModel');

class CadastroController {
    async salvar(req, res) {
        let cadastro = req.body;
        const max = await cadastroModel.findOne({}).sort({ codigo: -1 });
        cadastro.codigo = max == null ? 1 : max.codigo + 1;
        const resultado = await cadastroModel.create(cadastro);
        res.status(201).json(resultado);
    }

    async listar(req, res) {
        const resultado = await cadastroModel.find({});
        res.status(200).json(resultado);
    }

    async buscarPorId(req, res) {
        const codigo = req.params.codigo;
        const resultado = await cadastroModel.findOne({ 'codigo': codigo });
        res.status(200).json(resultado);
    }

    async atualizar(req, res) {
        const codigo = req.params.codigo;
        const _codigo = String((await cadastroModel.findOne({ 'codigo': codigo }))._codigo);
        await cadastroModel.findByIdAndUpdate(String(_codigo), req.body);
        res.status(200).send();
    }

    async excluir(req, res) {
        const codigo = req.params.codigo;
        const _codigo = String((await cadastroModel.findOne({ 'codigo': codigo }))._codigo);
        await cadastroModel.findByIdAndRemove(String(_codigo));
        res.status(200).send();
    }
}

module.exports = new CadastroController();
