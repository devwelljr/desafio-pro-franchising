const jwt = require("jsonwebtoken");
const rescue = require("express-rescue");

const { insertImage } = require("../../services/products/index.js");
const { ACCEPTED, UNAUTHORIZED } = require("http-status-codes").StatusCodes;

/* Inserir imagem em algum produto via id */
module.exports = rescue(async (req, res) => {
  const { id } = req.params;
  const { originalname } = req.file;
  const token = req.headers.authorization;

  const secret = process.env.SECRET ? process.env.SECRET : "segredo";
  const { email } = jwt.verify(token, secret);

  const newImage = await insertImage(id, originalname, email);

  if (newImage.err) {
    return res.status(UNAUTHORIZED).json(newImage.err);
  }

  return res.status(ACCEPTED).json(newImage);
});
