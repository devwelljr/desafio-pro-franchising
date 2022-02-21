require("dotenv").config();

const rescue = require("express-rescue");
const { loginUser } = require("../../services/users/index");
const { ACCEPTED, NOT_ACCEPTABLE } = require("http-status-codes").StatusCodes;

/* Login de um cliente */
module.exports = rescue(async (req, res) => {
  const { email, password } = req.body;

  const user = await loginUser(email, password);

  if (user.err) {
    return res.status(NOT_ACCEPTABLE).send(user.err);
  }

  const token = user.token;
  return res.status(ACCEPTED).json({ token });
});
