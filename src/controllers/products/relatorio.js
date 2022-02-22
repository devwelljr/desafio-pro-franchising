const rescue = require("express-rescue");
const { ACCEPTED, UNAUTHORIZED } = require("http-status-codes").StatusCodes;
const { relatorio } = require("../../services/products/index.js");

/* Controller do relatorio */
module.exports = rescue(async (req, res) => {
  const token = req.headers.authorization;

  const allProducts = await relatorio(token);

  if (allProducts.err) {
    return res.status(UNAUTHORIZED).json(allProducts.err);
  }

  return res.status(ACCEPTED).json({ allProducts });
});
