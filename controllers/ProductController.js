const ProductsService = require('../services/ProductsService');

const getAllProducts = async (_req, res) => {
  const products = await ProductsService.getAllProducts();
  return res.status(200).json(products);
};

const getProduct = async (req, res) => {
  const {
    id,
  } = req.params;
  const product = await ProductsService.getProduct(id);
  if (!product) {
 return res.status(404).json({
    message: 'Product not found',
  }); 
}
  return res.status(200).json(product);
};

const createProduct = async (req, res) => {
  const {
    name,
  } = req.body;

  const {
    code,
    response,
  } = await ProductsService.createProduct(name);

  res.status(code).json(response);
};

module.exports = {
  getAllProducts,
  getProduct,
  createProduct,
};