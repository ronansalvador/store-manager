const salesService = require('../services/salesService');

const createSale = async (req, res) => {
  const sales = req.body;

  const {
    code,
    response,
    message,
  } = await salesService.createSale(sales);

  if (message) {
    return res.status(code).json({
      message,
    });
  }

  return res.status(code).json(response);
};

const getAllSales = async (_req, res) => {
  const sales = await salesService.getAllSales();

  res.status(200).json(sales);
};

const getSale = async (req, res) => {
  const {
    id,
  } = req.params;

  const {
    message,
    code,
    response,
  } = await salesService.getSale(id);

  if (message) {
    res.status(code).json({
      message,
    });
  }

  res.status(code).json(response);
};

module.exports = {
  createSale,
  getAllSales,
  getSale,
};