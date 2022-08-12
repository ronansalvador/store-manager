const connection = require('./connection');

const getAllProducts = async () => {
  const sql = 'SELECT * FROM StoreManager.products;';
  const [result] = await connection.execute(sql);
  return result;
};

const getProduct = async (id) => {
  const sql = 'SELECT * FROM StoreManager.products WHERE id=?;';
  const [
    [result],
  ] = await connection.execute(sql, [id]);
  return result;
};

module.exports = {
  getAllProducts,
  getProduct,
};