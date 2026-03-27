import * as Joi from "joi";
import { createMaterialRequestDetailSchema } from "src/features/material-request-detail/validations/requests/create-material-request-detail.request";
import { getMaterialRequestStatusEnums } from "../../enums/material-request-status.enum";

const materialRequestStatusEnum = getMaterialRequestStatusEnums().map(
  (status) => +status.id,
);

export const createMaterialRequestSchema = Joi.object({
  title: Joi.string().required(),
  date: Joi.date().required(),
  note: Joi.string().optional().allow(null),
  material_request_details: Joi.array()
    .items(Joi.object().concat(createMaterialRequestDetailSchema))
    .optional()
    .default([]),
});
