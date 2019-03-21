const express = require('express');
const morgan = require('morgan');

const rotaProduto = require('./routes/rotaProduto');

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rotas
app.use('/produtos', rotaProduto);

app.use('/', (req, res) => {
  res.send('API Rest Express 1.0.0');
});

// Arquivos estáticos

app.listen(port, () => {
  console.log('Servidor rodando na porta', port);
});
