require("dotenv").config();

const jwt = require("jsonwebtoken");
const connection = require("../../models/connection");
const { relatorio } = require("../../models/products/index");

/* Chamada de um getAll de produtos no banco de dados */
module.exports = async (token) => {
  const db = await connection();

  const secret = process.env.SECRET ? process.env.SECRET : "segredo";
  const { email } = jwt.verify(token, secret);

  const { _id } = await db.collection("users").findOne({ email });

  if (_id) {
    const allProducts = await relatorio(_id);

    const response = allProducts.map((product) => {
      let totalGasto = {};
      totalGasto = product.ingredients.map(({ name, price, quantity }) => {
        let total = price * quantity;
        return { custo: `O ingrediente ${name} gasta no total R$${total}` };
      });

      const { name, price, quantity } = product;
      product = { name, price, quantity, totalGasto };
      return product;
    });

    return response;
  }

  return { err: "Voce nao tem acesso" };
};
