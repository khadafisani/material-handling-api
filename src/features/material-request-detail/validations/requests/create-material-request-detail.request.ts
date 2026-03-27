import * as Joi from "joi";

export const createMaterialRequestDetailSchema = Joi.object({
  material_name: Joi.string().required(),
  description: Joi.string().optional().allow(null),
  quantity: Joi.number().required(),
  unit: Joi.string().required(),
  type: Joi.string().required(),
});
