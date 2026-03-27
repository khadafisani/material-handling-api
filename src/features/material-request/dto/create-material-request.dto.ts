import { MaterialRequestDetailDto } from "src/features/material-request-detail/dto/material-request-detail.dto";
import { UpdateMaterialRequestDto } from "./update-material-request.dto";

export class CreateMaterialRequestDto extends UpdateMaterialRequestDto {
  material_request_details?: Array<MaterialRequestDetailDto>;
}
