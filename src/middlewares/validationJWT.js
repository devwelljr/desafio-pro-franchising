require("dotenv").config();

const jwt = require("jsonwebtoken");
const { findByEmail } = require("../models/users/index");
const { UNAUTHORIZED } = require('http-status-codes').StatusCodes;

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(UNAUTHORIZED).json({ message: "missing auth token" });
  }

  try {
    const secret = process.env.SECRET ? process.env.SECRET : "segredo";
    const { email } = jwt.verify(token, secret);

    const user = await findByEmail(email);

    if (!user) {
      return res.status(UNAUTHORIZED).json({ message: "jwt malformed" });
    }

    next();
  } catch (err) {
    return res.status(UNAUTHORIZED).json({ message: err.message });
  }
};
