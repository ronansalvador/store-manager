const ProductsModel = require('../models/ProductsModel');

const getAllProducts = async () => ProductsModel.getAllProducts();

const getProduct = async (id) => {
  const product = await ProductsModel.getProduct(id);
  if (!product) return false;
  return product;
};

module.exports = {
  getAllProducts,
  getProduct,
};