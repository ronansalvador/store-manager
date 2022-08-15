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

const updateProduct = async (name, id) => {
  const result = await ProductsModel.updateProduct(name, id);
  if (!result) return false;
  return result;
};

module.exports = {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
};