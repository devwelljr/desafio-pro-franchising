const connection = require("../../models/connection");
const { deleteProduct } = require("../../models/products/index.js");

/* deletar produto depois de validado o user */
module.exports = async (id, email) => {
  const db = await connection();
  const { _id } = await db.collection("users").find({ email });
  const product = await db.collection("products").find({ _id: id });

  if (_id === product.userId) {
    const deleted = await deleteProduct(id);

    return deleted;
  }

  return { err: "Voce nao tem acesso a este produto" };
};
