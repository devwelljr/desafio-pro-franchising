const { getAll } = require('../../models/products/index');

module.exports = async (email) => {
  const products = await getAll(email);

  return products;
};
