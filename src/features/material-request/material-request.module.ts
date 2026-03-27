import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { MaterialRequest } from "./entities/material-request.entity";
import { MaterialRequestController } from "./material-request.controller";
import { MaterialRequestService } from "./material-request.service";

@Module({
  imports: [SequelizeModule.forFeature([MaterialRequest])],
  controllers: [MaterialRequestController],
  providers: [MaterialRequestService],
})
export class MaterialRequestModule {}
