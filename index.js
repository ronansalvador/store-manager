const express = require('express');
const app = require('./app');
// const ProductController = require('./controllers/ProductController');

require('dotenv').config();

app.use(express.json());

// app.get('/products', ProductController.getAllProducts);

// app.get('/products/:id', ProductController.getProduct);

// não altere esse arquivo, essa estrutura é necessária para à avaliação do projeto
// iniciando

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
