const Controller = require('./Controller.js');
const ProdutosServices = require('../services/produtosServices.js');

const produtosServices = new ProdutosServices(); 

class ProdutoController extends Controller {
    constructor() {
        super(produtosServices);
    }
}

module.exports = ProdutoController;