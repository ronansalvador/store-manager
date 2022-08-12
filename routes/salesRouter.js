const express = require('express');
const salesController = require('../controllers/salesController');
const salesValidate = require('../middlewares/salesValidation');

const salesRoute = express.Router();

salesRoute.post('/', salesValidate, salesController.createSale);

module.exports = salesRoute;