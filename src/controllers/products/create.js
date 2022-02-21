require("dotenv").config();

const jwt = require("jsonwebtoken");
const rescue = require("express-rescue");
const { createMyProduct } = require("../../services/products/index.js");
const { CREATED } = require('http-status-codes').StatusCodes;

/* Controller responsável pela criação de novo produto */
module.exports = rescue(async (req, res) => {
  const { name, price, quantity, ingredients, unity } = req.body;
  const token = req.headers.authorization;

  const secret = process.env.SECRET ? process.env.SECRET : "segredo";
  const { email } = jwt.verify(token, secret);

  const product = await createMyProduct({
    name,
    price,
    quantity,
    ingredients,
    unity,
    email,
  });

  return res.status(CREATED).json({ product });
});
