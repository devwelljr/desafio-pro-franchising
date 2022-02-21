const { insertImage } = require("../../services/products/index.js");
const { ACCEPTED } = require('http-status-codes').StatusCodes;

/* Inserir imagem em algum produto via id */
module.exports = async (req, res) => {
  const { id } = req.params;
  const { originalname } = req.file;

  const newImage = await insertImage(id, originalname);

  return res.status(ACCEPTED).json(newImage);
};
