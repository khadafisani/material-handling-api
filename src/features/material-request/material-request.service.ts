import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Sequelize } from "sequelize-typescript";
import { QueryBuilderHelper } from "src/cores/helpers/query-builder.helper";
import { ResponseHelper } from "src/cores/helpers/response.helper";
import { User } from "../user/entities/user.entity";
import { CreateMaterialRequestDto } from "./dto/create-material-request.dto";
import { UpdateMaterialRequestDto } from "./dto/update-material-request.dto";
import { MaterialRequest } from "./entities/material-request.entity";
import MaterialRequestStatusEnum from "./enums/material-request-status.enum";

@Injectable()
export class MaterialRequestService {
  constructor(
    @InjectModel(MaterialRequest)
    private readonly materialRequestModel: typeof MaterialRequest,
    private readonly response: ResponseHelper,
    private readonly sequelize: Sequelize,
  ) {}

  async findAll(query: any, user: User) {
    /**
     * Something happen when edit data
     * The editted data go to last position in table (even no order by provided)
     * I will investigate / learn it later
     * Now i will just set default order by created_at (descending) if order_by is not provided
     */
    if (typeof query?.order_by === "undefined") {
      query.order_by = "created_at";
      query.direction = "DESC";
    }
    try {
      const { count, data } = await new QueryBuilderHelper(
        this.materialRequestModel,
        query,
      ).getResult();

      const result = {
        count: count,
        material_requests: data,
      };

      return this.response.success(
        result,
        200,
        "Successfully get material requests",
      );
    } catch (error) {
      return this.response.fail(error, 400);
    }
  }

  async findOne(materialRequest: MaterialRequest) {
    await materialRequest.reload({ include: ["material_request_details"] });
    return this.response.success(
      materialRequest,
      200,
      "Successfully get material request",
    );
  }

  async create(createMaterialRequestDto: CreateMaterialRequestDto, user: User) {
    const transaction = await this.sequelize.transaction();
    try {
      const materialRequest = await this.materialRequestModel.create(
        {
          ...createMaterialRequestDto,
          status: MaterialRequestStatusEnum.REQUESTED,
        },
        { include: ["material_request_details"], transaction },
      );
      await transaction.commit();
      return this.response.success(
        materialRequest,
        200,
        "Successfully create material request",
      );
    } catch (error) {
      await transaction.rollback();
      return this.response.fail(error, 400);
    }
  }

  async update(
    materialRequest: MaterialRequest,
    updateMaterialRequestDto: UpdateMaterialRequestDto,
    user: User,
  ) {
    const transaction = await this.sequelize.transaction();
    try {
      await materialRequest.update(
        { ...updateMaterialRequestDto },
        { transaction },
      );
      await transaction.commit();
      return this.response.success(
        materialRequest,
        200,
        "Successfully update material request",
      );
    } catch (error) {
      await transaction.rollback();
      return this.response.fail(error, 400);
    }
  }

  async remove(materialRequest: MaterialRequest, user: User) {
    const transaction = await this.sequelize.transaction();
    try {
      await materialRequest.update({ deleted_by: user.id }, { transaction });
      await materialRequest.destroy({ transaction });
      await transaction.commit();
      return this.response.success(
        {},
        200,
        "Successfully delete material request",
      );
    } catch (error) {
      await transaction.rollback();
      return this.response.fail(error, 400);
    }
  }
}
