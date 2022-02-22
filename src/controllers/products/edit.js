const { edit } = require("../../services/products/index.js");
const { OK, UNAUTHORIZED } = require('http-status-codes').StatusCodes;

/* Controller da edicao do produto */
module.exports = async (req, res) => {
  const { id } = req.params;
  const token = req.headers.authorization;
  const { name, price, quantity, ingredients } = req.body;
  const product = { name, price, quantity, ingredients };

  const newproduct = await edit(id, token, product);

  if (newproduct.err) {
    return res.status(UNAUTHORIZED).json(newproduct.err);
  }

  return res.status(OK).json(newproduct);
};
