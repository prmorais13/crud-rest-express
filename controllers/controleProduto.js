const { produtos } = require('../db.json');

module.exports = {
  getProdutos: (req, res) => {
    res.json(produtos);
  },
  addProdutos: (req, res) => {
    const { nome } = req.body;
    novoProduto = {
      id: produtos.length,
      nome
    };
    produtos.push(novoProduto);
    res.json({ success: true, msg: 'Dados gravados.' });
  },
  updateProduto: (req, res) => {
    const id = req.params.id;
    const { nome } = req.body;

    produtos.forEach(produto => {
      if (produto.id === Number(id)) {
        produto.nome = nome;
      }
      res.json({ success: true, msg: 'Dados atualizados.' });
    });
  },
  delProduto: (req, res) => {
    const { id } = req.params.id;
    produtos.forEach((produto, i) => {
      if (produto.id === Number(id)) {
        // console.log(id + '-' + i);
        produtos.splice(i, 1);
      }
      res.json({ success: true, msg: 'Dados excluídos.' });
    });
  }
};
