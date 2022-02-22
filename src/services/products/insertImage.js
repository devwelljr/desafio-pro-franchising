require("dotenv").config();

const connection = require("../../models/connection");
const { insertImage } = require("../../models/products/index.js");

/* Criacao do link da imagem e salvar no banco */
module.exports = async (id, filename, email) => {
  const port = process.env.PORT || 3001;

  const db = await connection();
  const { _id } = await db.collection("users").find({ email });
  const product = await db.collection("products").find({ _id: id });

  if (_id === product.userId) {
    const imageLink = `localhost:${port}/images/${filename}`;

    const newImage = await insertImage(id, imageLink);

    return newImage;
  }

  return { err: "Voce nao tem acesso a este produto" };
};
