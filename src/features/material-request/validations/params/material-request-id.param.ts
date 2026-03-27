import * as Joi from "joi";
import { JoiException } from "src/cores/helpers/joi-exception.helper";
import { MaterialRequest } from "../../entities/material-request.entity";

export const materialRequestIdExternal = async (value, helper) => {
  const materialRequest = await MaterialRequest.findOne({
    where: { id: value },
  });
  if (!materialRequest) {
    throw JoiException.handle("Material request not found", helper);
  }
  return materialRequest;
};

export const materialRequestIdParamSchema = Joi.number()
  .required()
  .external(materialRequestIdExternal);
