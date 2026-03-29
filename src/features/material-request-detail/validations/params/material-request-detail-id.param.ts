import * as Joi from "joi";
import { JoiException } from "src/cores/helpers/joi-exception.helper";
import { MaterialRequestDetail } from "../../entities/material-request-detail.entity";

export const materialRequestDetailIdExternal = async (value, helper) => {
  const materialRequestDetail = await MaterialRequestDetail.findOne({
    where: { id: value.id, material_request_id: value.materialRequestId },
  });
  if (!materialRequestDetail) {
    throw JoiException.handle("Material request not found", helper);
  }
  return materialRequestDetail;
};

export const materialRequestDetailIdParamSchema = Joi.object()
  .required()
  .external(materialRequestDetailIdExternal);
