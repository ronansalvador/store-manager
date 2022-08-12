const express = require('express');
const productsRoute = require('./routes/ProductsRoute');
const salesRoute = require('./routes/salesRouter');

const app = express();

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação
app.use(express.json());
app.use('/products', productsRoute);
app.use('/sales', salesRoute);

module.exports = app; 