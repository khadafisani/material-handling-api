import * as Joi from "joi";
import { getMaterialRequestStatusEnums } from "../../enums/material-request-status.enum";

const materialRequestStatusEnum = getMaterialRequestStatusEnums().map(
  (status) => +status.id,
);

export const updateMaterialRequestSchema = Joi.object({
  requester_name: Joi.string().required(),
  title: Joi.string().required(),
  date: Joi.date().required(),
  note: Joi.string().optional().allow(null),
  status: Joi.number()
    .required()
    .valid(...materialRequestStatusEnum),
});
