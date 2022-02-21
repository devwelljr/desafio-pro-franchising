const Joi = require("joi");

/* Schemas para validação com Joi: */
const createSchema = Joi.object({
  username: Joi.string().min(4).required(),
  password: Joi.string().min(6).required(),
  email: Joi.string().email().required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

module.exports = { createSchema, loginSchema };
