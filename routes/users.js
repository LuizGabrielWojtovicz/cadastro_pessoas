const express = require('express');
const router = express.Router();
const cadastroController = require('../controllers/cadastroController');

router.get('/', cadastroController.listar);
router.post('/', cadastroController.salvar);
router.get('/:id', cadastroController.buscarPorId);
router.put('/:id', cadastroController.atualizar);
router.delete('/:id', cadastroController.excluir);
router.get('/:id/profile-image', cadastroController.getProfile);
router.put('/:id/profile-image', express.raw({ limit: 99999999 }), cadastroController.atualizarImagem);

module.exports = router;
