const connection = require("../connection");

/* Encontrar cliente pelo email */
module.exports = async (email) => {
  const db = await connection();

  const response = await db
    .collection("users")
    .findOne({ email }, { projection: { password: 0 } });

  return response;
};
