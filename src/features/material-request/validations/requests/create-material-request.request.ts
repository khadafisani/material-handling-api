import * as Joi from "joi";
import { createMaterialRequestDetailSchema } from "src/features/material-request-detail/validations/requests/create-material-request-detail.request";

export const createMaterialRequestSchema = Joi.object({
  title: Joi.string().required(),
  date: Joi.date().required(),
  note: Joi.string().optional().allow(null),
  requester_name: Joi.string().required(),
  material_request_details: Joi.array()
    .items(Joi.object().concat(createMaterialRequestDetailSchema))
    .optional()
    .default([]),
});
