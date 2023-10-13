import Joi from "joi";

const listSchema = Joi.object({
  start_date: Joi.date().required(),
  end_date: Joi.date(),
});

export { listSchema };