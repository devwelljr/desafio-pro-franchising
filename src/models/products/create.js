const connection = require("../connection");

/* Adicionando receita no banco */
module.exports = async ({
  name,
  price,
  quantity,
  ingredients,
  unity,
  userId,
}) => {
  const db = await connection();

  const { insertedId } = await db
    .collection("products")
    .insertOne({ name, price, quantity, ingredients, unity, userId });

  const newRecipe = {
    _id: insertedId,
    name,
    price,
    quantity,
    ingredients,
    unity,
    userId,
  };

  return newRecipe;
};
