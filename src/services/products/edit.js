require("dotenv").config();

const jwt = require("jsonwebtoken");
const connection = require("../../models/connection");
const { edit } = require("../../models/products/index");

/* Chamada da att no produto no banco de dados */
module.exports = async (id, token, product) => {
  const db = await connection();

  const secret = process.env.SECRET ? process.env.SECRET : "segredo";
  const { email } = jwt.verify(token, secret);

  const { _id } = await db.collection("users").findOne({ email });
  const Product = await db.collection("products").findOne({ _id: id });

  if (_id === Product.userId) {
    const newProduct = await edit(id, product);
    return newProduct;
  }

  return { err: "Voce nao tem acesso a este produto" };
};
