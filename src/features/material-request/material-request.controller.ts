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
import { User } from "../user/entities/user.entity";
import { CreateMaterialRequestDto } from "./dto/create-material-request.dto";
import { MaterialRequest } from "./entities/material-request.entity";
import { MaterialRequestService } from "./material-request.service";
import { materialRequestIdParamSchema } from "./validations/params/material-request-id.param";
import { createMaterialRequestSchema } from "./validations/requests/create-material-request.request";

@Controller()
export class MaterialRequestController {
  constructor(
    private readonly materialRequestService: MaterialRequestService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Query() query, @CurrentUser() user: User) {
    return this.materialRequestService.findAll(query, user);
  }

  @UseGuards(JwtAuthGuard)
  @Get(":materialRequestId")
  async findOne(
    @Param(
      "materialRequestId",
      new JoiValidationParamPipe(materialRequestIdParamSchema),
    )
    materialRequest: MaterialRequest,
  ) {
    return this.materialRequestService.findOne(materialRequest);
  }

  @UseGuards(JwtAuthGuard)
  @UseInterceptors(AnyFilesInterceptor())
  @Post()
  async create(
    @Body(new JoiValidationPipe(createMaterialRequestSchema))
    createMaterialRequestDto: CreateMaterialRequestDto,
    @CurrentUser() user: User,
  ) {
    return this.materialRequestService.create(createMaterialRequestDto, user);
  }

  @UseGuards(JwtAuthGuard)
  @Put(":materialRequestId")
  async update(
    @Param(new JoiValidationParamPipe(materialRequestIdParamSchema))
    materialRequest: MaterialRequest,
    @Body(new JoiValidationPipe(createMaterialRequestSchema))
    updateMaterialRequestDto: CreateMaterialRequestDto,
    @CurrentUser() user: User,
  ) {
    return this.materialRequestService.update(
      materialRequest,
      updateMaterialRequestDto,
      user,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":materialRequestId")
  async remove(
    @Param(new JoiValidationParamPipe(materialRequestIdParamSchema))
    materialRequest: MaterialRequest,
    @CurrentUser() user: User,
  ) {
    return this.materialRequestService.remove(materialRequest, user);
  }
}
