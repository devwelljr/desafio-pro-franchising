require('dotenv').config();

const { insertImage } = require("../../models/products/index.js");

/* Criacao do link da imagem e salvar no banco */
module.exports = async (id, filename) => {
  const port = process.env.PORT || 3001;
  const imageLink = `localhost:${port}/public/uploads/${filename}`;

  const newImage = await insertImage(id, imageLink);

  return newImage;
};
