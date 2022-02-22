const { getAll } = require('../../models/products/index');

/* Chamada do getAll no banco */
module.exports = async (email) => {
  const products = await getAll(email);

  return products;
};
