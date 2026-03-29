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
} from "@nestjs/common";
import { CurrentUser } from "src/cores/decorators/current-user.decorator";
import { JwtAuthGuard } from "src/cores/guards/jwt-auth.guard";
import { JoiValidationParamPipe } from "src/cores/validators/pipes/joi-validation-param.pipe";
import { JoiValidationPipe } from "src/cores/validators/pipes/joi-validation.pipe";
import { User } from "../user/entities/user.entity";
import { CreateMaterialRequestDto } from "./dto/create-material-request.dto";
import { UpdateMaterialRequestDto } from "./dto/update-material-request.dto";
import { MaterialRequest } from "./entities/material-request.entity";
import { MaterialRequestService } from "./material-request.service";
import { materialRequestIdParamSchema } from "./validations/params/material-request-id.param";
import { createMaterialRequestSchema } from "./validations/requests/create-material-request.request";
import { updateMaterialRequestSchema } from "./validations/requests/update-material-request.request";

@Controller()
export class MaterialRequestController {
  constructor(
    private readonly materialRequestService: MaterialRequestService,
  ) {}

  // @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Query() query, @CurrentUser() user: User) {
    return this.materialRequestService.findAll(query, user);
  }

  // @UseGuards(JwtAuthGuard)
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
  @Post()
  async create(
    @Body(new JoiValidationPipe(createMaterialRequestSchema))
    createMaterialRequestDto: CreateMaterialRequestDto,
    @CurrentUser() user: User,
  ) {
    return this.materialRequestService.create(createMaterialRequestDto, user);
  }

  // @UseGuards(JwtAuthGuard)
  @Put(":id")
  async update(
    @Param("id", new JoiValidationParamPipe(materialRequestIdParamSchema))
    materialRequest: MaterialRequest,
    @Body(new JoiValidationPipe(updateMaterialRequestSchema))
    updateMaterialRequestDto: UpdateMaterialRequestDto,
    @CurrentUser() user: User,
  ) {
    return this.materialRequestService.update(
      materialRequest,
      updateMaterialRequestDto,
      user,
    );
  }

  // @UseGuards(JwtAuthGuard)
  @Delete(":id")
  async remove(
    @Param("id", new JoiValidationParamPipe(materialRequestIdParamSchema))
    materialRequest: MaterialRequest,
    @CurrentUser() user: User,
  ) {
    return this.materialRequestService.remove(materialRequest, user);
  }
}
