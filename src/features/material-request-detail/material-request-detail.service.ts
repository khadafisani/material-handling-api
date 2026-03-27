import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Sequelize } from "sequelize-typescript";
import { QueryBuilderHelper } from "src/cores/helpers/query-builder.helper";
import { ResponseHelper } from "src/cores/helpers/response.helper";
import { MaterialRequest } from "../material-request/entities/material-request.entity";
import { User } from "../user/entities/user.entity";
import { MaterialRequestDetailDto } from "./dto/material-request-detail.dto";
import { MaterialRequestDetail } from "./entities/material-request-detail.entity";

@Injectable()
export class MaterialRequestDetailService {
  constructor(
    @InjectModel(MaterialRequestDetail)
    private readonly materialRequestDetailModel: typeof MaterialRequestDetail,
    private readonly response: ResponseHelper,
    private readonly sequelize: Sequelize,
  ) {}

  async findAll(materialRequest: MaterialRequest, query: any, user: User) {
    try {
      const { count, data } = await new QueryBuilderHelper(
        this.materialRequestDetailModel,
        query,
      )
        .where({ material_request_id: materialRequest.id })
        .getResult();

      const result = {
        count: count,
        material_request_details: data,
      };

      return this.response.success(
        result,
        200,
        "Successfully get material requests details",
      );
    } catch (error) {
      return this.response.fail(error, 400);
    }
  }

  async findOne(materialRequestDetail: MaterialRequestDetail) {
    return this.response.success(
      materialRequestDetail,
      200,
      "Successfully get material request detail",
    );
  }

  async create(
    materialRequest: MaterialRequest,
    createMaterialRequestDetailDto: MaterialRequestDetailDto,
    user: User,
  ) {
    const transaction = await this.sequelize.transaction();
    try {
      const materialRequestDetail =
        await this.materialRequestDetailModel.create(
          {
            ...createMaterialRequestDetailDto,
            material_request_id: materialRequest.id,
          },
          { transaction },
        );
      await transaction.commit();
      return this.response.success(
        materialRequestDetail,
        200,
        "Successfully create material request detail",
      );
    } catch (error) {
      await transaction.rollback();
      return this.response.fail(error, 400);
    }
  }

  async update(
    materialRequestDetail: MaterialRequestDetail,
    updateMaterialRequestDetailDto: MaterialRequestDetailDto,
    user: User,
  ) {
    const transaction = await this.sequelize.transaction();
    try {
      await materialRequestDetail.update(
        { ...updateMaterialRequestDetailDto },
        { transaction },
      );
      await transaction.commit();
      return this.response.success(
        materialRequestDetail,
        200,
        "Successfully update material request detail",
      );
    } catch (error) {
      await transaction.rollback();
      return this.response.fail(error, 400);
    }
  }

  async remove(materialRequestDetail: MaterialRequestDetail, user: User) {
    const transaction = await this.sequelize.transaction();
    try {
      await materialRequestDetail.destroy({ transaction });
      await transaction.commit();
      return this.response.success(
        {},
        200,
        "Successfully delete material request detail",
      );
    } catch (error) {
      await transaction.rollback();
      return this.response.fail(error, 400);
    }
  }
}
