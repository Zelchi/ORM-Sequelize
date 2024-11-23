const { Router } = require('express');
const ProdutoController = require('../controllers/produtosController.js');

const produtosController = new ProdutoController();

const router = Router();

router.get('/', (req, res) => produtosController.getAll(req, res));
router.put('/:id', (req, res) => produtosController.atualiza(req, res));

module.exports = router;