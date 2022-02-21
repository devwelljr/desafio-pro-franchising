const { ObjectId } = require('mongodb');
const connection = require("../connection");

/* Inserir o link da imagem para requisicao no banco */
module.exports = async (id, imageLink) => {
  const db = await connection();

  const newRecipe = await db
    .collection("products")
    .updateOne({ _id: ObjectId(id) }, { $set: { image: imageLink } });

  return newRecipe;
};
