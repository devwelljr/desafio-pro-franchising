const { loginSchema } = require("./schemas");

/* Validação do Login */
module.exports = (req, res, next) => {
  const { error } = loginSchema.validate(req.body);

  if (error) {
    return res.status(400).send({
      message: error.message,
    });
  }

  next();
};
