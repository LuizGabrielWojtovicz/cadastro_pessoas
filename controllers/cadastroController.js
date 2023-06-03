const cadastroModel = require('../models/cadastroModel');
const express = require('express')

class CadastroController {
    async salvar(req, res) {
        try {
            let cadastro = req.body;
            const max = await cadastroModel.findOne({}).sort({ codigo: -1 });
            cadastro.codigo = max == null ? 1 : max.codigo + 1;
            const resultado = await cadastroModel.create(cadastro);
            res.status(201).json(resultado);
        } catch (error) {
            res.status(500).json({ erro: 'Não foi possível cadastrar o usuário.' })
        }
    }

    async listar(req, res) {
        try {
            const filter = {}

            if (req.query.nome) {
                filter.nome = new RegExp(req.query.nome, 'i')
            }
            if (req.query.sobreNome) {
                filter.sobreNome = new RegExp(req.query.sobreNome, 'i')
            }
            if (req.query.cidade) {
                filter.cidade = new RegExp(req.query.cidade, 'i')
            }
            if (req.query.status) {
                filter.status = req.query.status
            }
            console.log(filter)
            const resultado = await cadastroModel.find(filter, {
                imagemPerfil: 0
            });
            res.status(200).json(resultado);
        } catch (error) {
            res.status(500).json({ erro: 'Não foi possível listar os usuários.' })
        }
    }

    async buscarPorId(req, res) {
        try {
            const id = req.params.id;
            const resultado = await cadastroModel.findById(id);
            res.status(200).json(resultado);
        } catch (error) {
            res.status(500).json({ erro: 'Não foi possível ler a imagem.' })
        }
    }

    async atualizar(req, res) {
        try {
            const id = req.params.id;
            const atualizado = await cadastroModel.findByIdAndUpdate(id, req.body);
            res.status(200).json(atualizado);
        } catch (error) {
            res.status(500).json({ erro: 'Não foi possível atualizar o usuário.' })
        }
    }

    async excluir(req, res) {
        try {
            const id = req.params.id;
            await cadastroModel.findByIdAndRemove(id);
            res.status(200).json({
                mensagem: 'Usuário removido'
            });
        } catch (error) {
            res.status(500).json({ erro: 'Não foi possível remover.' })
        }
    }

    async atualizarImagem(req, res) {
        try {
            const user = await cadastroModel.findById(req.params.id, {})

            user.imagemPerfil = req.body
            await user.save()

            res.json({
                done: true
            })
        } catch (error) {
            res.status(500).json({ erro: 'Não foi possível atualizar a imagem.' })
        }
    }

    /**
     * 
     * @param {express.Request} req 
     * @param {express.Response} res 
     */
    async getProfile(req, res) {
        try {
            const user = await cadastroModel.findById(req.params.id)

            res.contentType('image/jpeg').send(user.imagemPerfil)
        } catch (error) {
            res.status(500).json({ erro: 'Não foi possível ler a imagem.' })
        }
    }
}

module.exports = new CadastroController();
