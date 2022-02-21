const connection = require("../../models/connection");
const { create } = require("../../models/products/index.js");

/* Cria produto do usuário */
module.exports = async ({
  name,
  price,
  quantity,
  ingredients,
  unity,
  email,
}) => {
  const db = await connection();
  const { _id } = await db.collection("users").findOne({ email });

  const newProduct = await create({
    name,
    price,
    quantity,
    ingredients,
    unity,
    userId: _id,
  });

  return newProduct;
};
