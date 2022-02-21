require("dotenv").config();

const jwt = require("jsonwebtoken");
const rescue = require("express-rescue");
const { ACCEPTED } = require("http-status-codes").StatusCodes;
const { getAll } = require("../../services/products/index.js");

/* getAll produtos do dono logado */
module.exports = rescue(async (req, res) => {
  const token = req.headers.authorization;

  const secret = process.env.SECRET ? process.env.SECRET : "segredo";
  const { email } = jwt.verify(token, secret);

  const allProducts = await getAll(email);

  return res.status(ACCEPTED).json({ allProducts });
});
