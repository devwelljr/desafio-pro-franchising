require('dotenv').config();

const jwt = require('jsonwebtoken');

const connection = require("../connection");

/* Criação de um cliente */
module.exports = async (user) => {
  const db = await connection();
  const { username, email, password } = user;
  const { findByEmail } = require('./index.js');

  /* criptografia da senha usando jwt e variavel de ambiente */
  const secret = process.env.SECRET ? process.env.SECRET : 'segredo';
  const cryptPassword = jwt.sign(password, secret);

  await db.collection("users").insertOne({ username, email, password: cryptPassword });

  const response = await findByEmail(email);

  return response;
};
