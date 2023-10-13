import { Role } from "@prisma/client";
import Joi from "joi";

const updateSchema = Joi.object({
  id: Joi.number().integer().positive().required(),
  title: Joi.string(),
  detail: Joi.string().allow(''),
  start: Joi.date(),
  end: Joi.date(),
});

export { updateSchema };
