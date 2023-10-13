import Joi from "joi";

const createSchema = Joi.object({
  title: Joi.string().required(),
  detail: Joi.string().required().allow(''),
  start: Joi.date().required(),
  end: Joi.date().required(),
});

export { createSchema };
