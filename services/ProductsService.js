const ProductsModel = require('../models/ProductsModel');

const getAllProducts = async () => ProductsModel.getAllProducts();

const getProduct = async (id) => {
  const product = await ProductsModel.getProduct(id);
  if (!product) return false;
  return product;
};

const createProduct = async (name) => {
  const {
    insertId,
  } = await ProductsModel.createProduct(name);

  const response = {
    id: insertId,
    name,
  };

  return {
    code: 201,
    response,
  };
};

module.exports = {
  getAllProducts,
  getProduct,
  createProduct,
};