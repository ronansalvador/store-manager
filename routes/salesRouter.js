const express = require('express');
const salesController = require('../controllers/salesController');
const salesValidate = require('../middlewares/salesValidation');

const salesRoute = express.Router();

salesRoute.post('/', salesValidate, salesController.createSale);
salesRoute.get('/', salesController.getAllSales);
salesRoute.get('/:id', salesController.getSale);

module.exports = salesRoute;