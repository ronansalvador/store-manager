const express = require('express');
const productController = require('../controllers/ProductController');

const route = express.Router();

route.get('/', productController.getAllProducts);
route.get('/:id', productController.getProduct);

module.exports = route;