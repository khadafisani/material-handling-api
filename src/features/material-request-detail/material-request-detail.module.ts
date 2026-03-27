import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { MaterialRequestDetail } from "./entities/material-request-detail.entity";
import { MaterialRequestDetailController } from "./material-request-detail.controller";
import { MaterialRequestDetailService } from "./material-request-detail.service";

@Module({
  imports: [SequelizeModule.forFeature([MaterialRequestDetail])],
  controllers: [MaterialRequestDetailController],
  providers: [MaterialRequestDetailService],
})
export class MaterialRequestDetailModule {}
