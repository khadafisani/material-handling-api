import * as Joi from "joi";
import MaterialRequestStatusEnum, {
  getMaterialRequestStatusEnums,
} from "../../enums/material-request-status.enum";

const materialRequestStatusEnum = getMaterialRequestStatusEnums().map(
  (status) => +status.id,
);

export const createMaterialRequestSchema = Joi.object({
  title: Joi.string().required(),
  date: Joi.date().required(),
  note: Joi.string().optional().allow(null),
  status: Joi.number()
    .valid(...materialRequestStatusEnum)
    .default(MaterialRequestStatusEnum.REQUESTED),
});
