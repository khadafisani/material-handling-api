import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { AnyFilesInterceptor } from "@nestjs/platform-express";
import { CurrentUser } from "src/cores/decorators/current-user.decorator";
import { JwtAuthGuard } from "src/cores/guards/jwt-auth.guard";
import { JoiValidationParamPipe } from "src/cores/validators/pipes/joi-validation-param.pipe";
import { JoiValidationPipe } from "src/cores/validators/pipes/joi-validation.pipe";
import { MaterialRequest } from "../material-request/entities/material-request.entity";
import { materialRequestIdParamSchema } from "../material-request/validations/params/material-request-id.param";
import { User } from "../user/entities/user.entity";
import { MaterialRequestDetailDto } from "./dto/material-request-detail.dto";
import { MaterialRequestDetail } from "./entities/material-request-detail.entity";
import { MaterialRequestDetailService } from "./material-request-detail.service";
import { materialRequestDetailIdParamSchema } from "./validations/params/material-request-detail-id.param";
import { createMaterialRequestDetailSchema } from "./validations/requests/create-material-request-detail.request";

@Controller()
export class MaterialRequestDetailController {
  constructor(
    private readonly materialRequestDetailService: MaterialRequestDetailService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(
    @Param(
      "materialRequestId",
      new JoiValidationParamPipe(materialRequestIdParamSchema),
    )
    materialRequest: MaterialRequest,
    @Query() query,
    @CurrentUser() user: User,
  ) {
    return this.materialRequestDetailService.findAll(
      materialRequest,
      query,
      user,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get(":id")
  async findOne(
    @Param(new JoiValidationParamPipe(materialRequestDetailIdParamSchema))
    materialRequestDetail: MaterialRequestDetail,
  ) {
    return this.materialRequestDetailService.findOne(materialRequestDetail);
  }

  @UseGuards(JwtAuthGuard)
  @UseInterceptors(AnyFilesInterceptor())
  @Post()
  async create(
    @Param(
      "materialRequestId",
      new JoiValidationParamPipe(materialRequestIdParamSchema),
    )
    materialRequest: MaterialRequest,
    @Body(new JoiValidationPipe(createMaterialRequestDetailSchema))
    createMaterialRequestDetailDto: MaterialRequestDetailDto,
    @CurrentUser() user: User,
  ) {
    return this.materialRequestDetailService.create(
      materialRequest,
      createMaterialRequestDetailDto,
      user,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Put(":id")
  async update(
    @Param(new JoiValidationParamPipe(materialRequestDetailIdParamSchema))
    materialRequestDetail: MaterialRequestDetail,
    @Body(new JoiValidationPipe(createMaterialRequestDetailSchema))
    updateMaterialRequestDetailDto: MaterialRequestDetailDto,
    @CurrentUser() user: User,
  ) {
    return this.materialRequestDetailService.update(
      materialRequestDetail,
      updateMaterialRequestDetailDto,
      user,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  async remove(
    @Param(new JoiValidationParamPipe(materialRequestDetailIdParamSchema))
    materialRequestDetail: MaterialRequestDetail,
    @CurrentUser() user: User,
  ) {
    return this.materialRequestDetailService.remove(
      materialRequestDetail,
      user,
    );
  }
}
