const salesModel = require('../models/SalesModel');
const productsModel = require('../models/ProductsModel');

const createSale = async (sales) => {
  const responseProd = await productsModel.getAllProducts();
  const existProd = sales.filter((sale) => sale.productId > responseProd.length);

  if (existProd.length > 0) {
    return {
      code: 404,
      message: 'Product not found',
    };
  }

  const result = await salesModel.createSale(sales);

  const response = {
    id: result.insertId,
    itemsSold: sales,
  };

  return {
    code: 201,
    response,
  };
};

const salesList = (response) => {
  let result = [];

  response.forEach((item) => {
    result = [...result, {
      saleId: item.sale_id,
      date: item.date,
      productId: item.product_id,
      quantity: item.quantity,
    }];
  });

  return result;
};

const getAllSales = async () => {
  const result = await salesModel.getAllSales();
  const serialized = salesList(result);

  return serialized;
};

const getSale = async (id) => {
  const result = await salesModel.getSale(id);

  if (!result.length) {
    return {
      code: 404,
      message: 'Sale not found',
    };
  }

  const serialized = salesList(result)
    .map(({
      date,
      productId,
      quantity,
    }) => ({ date, productId, quantity }));

  return {
    code: 200,
    response: serialized,
  };
};

module.exports = {
  createSale,
  getAllSales,
  getSale,
};