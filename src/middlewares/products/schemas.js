const Joi = require("joi");

/* Schemas para validação com Joi: */
const ingredientsObject = Joi.object().keys({
  name: Joi.string().min(2).required(),
  price: Joi.number().required(),
  quantity: Joi.number().required(),
  unity: Joi.string().required(),
});

const createSchema = Joi.object({
  name: Joi.string().min(2).required(),
  price: Joi.number().required(),
  quantity: Joi.number().required(),
  ingredients: Joi.array().items(ingredientsObject).required(),
});

module.exports = { createSchema };
