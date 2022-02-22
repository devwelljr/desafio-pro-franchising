const connection = require("../connection");
const { ObjectId } = require("mongodb");

/* Atualizando o produto no banco */
module.exports = async (id, product) => {
  const db = await connection();
  let { name, price, quantity, ingredients } = product;

  const oldProduct = await db
    .collection("products")
    .findOne({ _id: ObjectId(id) });

  if (name === undefined || null) {
    name = oldProduct.name;
  }
  if (price === undefined || null) {
    price = oldProduct.price;
  }
  if (quantity === undefined || null) {
    quantity = oldProduct.quantity;
  }
  if (ingredients === undefined || null) {
    ingredients = oldProduct.ingredients;
  }

  await db.collection("products").updateOne(
    { _id: ObjectId(id) },
    {
      $set: {
        name: name,
        price: price,
        quantity: Number(quantity),
        ingredients,
      },
    }
  );

  const newProduct = await db.collection("products").findOne({ _id: ObjectId(id) });

  return newProduct;
};
