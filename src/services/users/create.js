const { create, findByEmail } = require("../../models/users/index.js");

/* Criação de um cliente */
module.exports = async ({ username, email, password }) => {
  const user = { username, email, password };

  const isExist = await findByEmail(email);

  const err = { err: { message: "user exist" } };
  if (isExist) return err;

  const response = await create(user);

  return response;
};
