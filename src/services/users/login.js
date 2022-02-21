require("dotenv").config();

const jwt = require("jsonwebtoken");
const connection = require("../../models/connection");

/* Login de um cliente */
module.exports = async (email, password) => {
  const db = await connection();
  const User = await db.collection("users").findOne({ email });

  const err = { err: { message: "user not exist" } };
  if (!User) return err;

  const secret = process.env.SECRET ? process.env.SECRET : "segredo";
  const dbPass = jwt.verify(User.password, secret);

  if (dbPass !== password) {
    return { err: { message: "wrong password" } };
  }

  /* Gera token JWT */
  const username = User.username;
  const payload = { email, username };
  const token = jwt.sign(payload, process.env.SECRET);

  return { token };
};
