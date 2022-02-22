const connection = require("../connection");
const { ObjectId } = require("mongodb");

module.exports = async (_id) => {
  const db = await connection();

  const allProducts = await db
    .collection("products")
    .find(
      { userId: ObjectId(_id) },
      {
        _id: 0,
        name: 1,
        price: 1,
        quantity: 1,
        ingredients: 1,
        image: 0,
      }
    )
    .toArray();

  return allProducts;
};
