const express = require('express');
const productController = require('../controllers/ProductController');
const validations = require('../middlewares/productValidation');

const route = express.Router();

route.get('/', productController.getAllProducts);
route.get('/:id', productController.getProduct);
route.post('/', validations.isNameFieldValid, productController.createProduct);
route.put('/:id', validations.isNameFieldValid, productController.updateProduct);
route.delete('/:id', productController.deleteProduct);

module.exports = route;