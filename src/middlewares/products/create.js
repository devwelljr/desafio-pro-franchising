const { createSchema } = require("./schemas");
const { NOT_ACCEPTABLE } = require('http-status-codes').StatusCodes;

/* Validação da criacao de novo produto */
module.exports = async (req, res, next) => {
  const { error } = createSchema.validate(req.body);

  if (error) {
    return res.status(NOT_ACCEPTABLE).send({
      message: error.message,
    });
  }

  next();
};
