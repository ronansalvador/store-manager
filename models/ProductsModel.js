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

const createProduct = async (name) => {
  const query = `
    INSERT INTO
      StoreManager.products (name)
    VALUES
      (?)
  `;

  const [result] = await connection.execute(query, [name]);

  return result;
};

const updateProduct = async (name, id) => {
  const query = 'UPDATE StoreManager.products SET name = ? WHERE id = ?';
  await connection.execute(query, [name, id]);
  return ({
    id,
    name,
  });
};

const deleteProduct = async (id) => {
  const query = 'DELETE FROM StoreManager.products WHERE id = ?';
  const [result] = await connection.execute(query, [id]);
  if (result.affectedRows <= 0) return false;
  return true;
};

module.exports = {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};