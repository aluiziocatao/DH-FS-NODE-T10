const express = require("express");
const routes = new express.Router();

//importanto controllers
const ProdutoController = require('../controllers/ProdutoController')
const QueryController = require('../controllers/QueryController')

routes.get('/produto/adicionar/:nome/:preco/:quantidade/:codigo', ProdutoController.getProduto)

routes.get('/query/params/:nome', QueryController.getQueryParams)

module.exports = routes