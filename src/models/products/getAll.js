const connection = require("../connection");

module.exports = async (email) => {
  const db = await connection();

  const { _id } = await db.collection("users").findOne({ email });

  const allProducts = await db
    .collection("products")
    .find({ userId: _id })
    .toArray();

  return allProducts;
};
