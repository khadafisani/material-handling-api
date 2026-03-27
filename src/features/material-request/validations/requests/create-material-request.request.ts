import * as Joi from "joi";

export const createMaterialRequestSchema = Joi.object({
  title: Joi.string().required(),
  date: Joi.date().required(),
  note: Joi.string().optional().allow(null),
});
