const express = require('express');
const router = express.Router();

const {
  getProdutos,
  addProdutos,
  updateProduto,
  delProduto
} = require('../controllers/controleProduto');

router
  .route('/')
  .get(getProdutos)
  .post(addProdutos);

router
  .route('/:id')
  .put(updateProduto)
  .delete(delProduto);

module.exports = router;
